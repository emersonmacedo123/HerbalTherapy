<template>
    <div class="client-profile">
        <h2>Perfil do Cliente</h2>
        <div class="profile-form">
            <div class="form-group">
                <label>Nome Completo:</label>
                <input v-model="profile.fullName" :disabled="!isEditing" type="text">
            </div>

            <div class="form-group">
                <label>Email:</label>
                <input v-model="profile.email" :disabled="!isEditing" type="email">
            </div>

            <div class="form-group">
                <label>Telefone:</label>
                <input v-model="profile.phone" :disabled="!isEditing" type="tel">
            </div>

            <div class="form-group">
                <label>Endereço:</label>
                <input v-model="profile.address" :disabled="!isEditing" type="text">
            </div>

            <div class="form-group">
                <label>Password:</label>
                <div class="password-field">
                    <input 
                        v-model="profile.password" 
                        :type="showPassword ? 'text' : 'password'"
                        :disabled="!isEditing"
                    >
                    <button @click="togglePassword" class="eye-button">
                        {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                    </button>
                </div>
            </div>

            <div class="buttons">
                <button @click="toggleEdit" class="edit-btn">
                    {{ isEditing ? 'Cancelar' : 'Editar' }}
                </button>
                <button 
                    v-if="isEditing" 
                    @click="saveChanges" 
                    class="save-btn"
                >
                    Salvar Alterações
                </button>
                <button @click="goBack" class="back-btn">Voltar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import userService from '@/services/userService';

export default {
    name: 'ClientePerfil',
    data() {
        return {
            isEditing: false,
            showPassword: false,
            profile: {
                fullName: '',
                email: '',
                phone: '',
                address: '',
                age: null,
            },
            message: null
        }
    },
    computed:
    {
        ...mapGetters(['currentUser'])
    },
    async created() {
        try{
            if(this.currentUser){
                const userData = await userService.getUserById(this.currentUser.id);
                this.profile = { ...userData};
            }

        } catch (error) {
            console.error('Error loading profile:', error);
            this.message = {
                type: 'error', 
                text: 'Erro ao carregar perfil'
            };
        } finally {
            this.loading = false;
        }
    }, 
    methods: {
        toggleEdit() {
            if (this.isEditing) {
                // Reset form if canceling
                this.loadUserData();
            }
            this.isEditing = !this.isEditing;
            this.message = null;
        },
        async saveChanges() {
            try {
                await userService.updateUser(this.profile);
                this.message = {
                    type: 'success',
                    text: 'Perfil atualizado com sucesso!'
                };
                this.isEditing = false;
            } catch (error) {
                console.error('Error saving profile:', error);
                this.message = {
                    type: 'error',
                    text: 'Erro ao atualizar perfil'
                };
            }
        },
        async loadUserData() {
            if (this.currentUser) {
                const userData = await userService.getUserById(this.currentUser.id);
                this.profile = { ...userData };
            }
        },
        goBack() {
            this.$router.push('/home');
        }

    }
}
</script>

<style scoped>

.client-profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

input:disabled {
    background-color: #f5f5f5;
}

.password-field {
    display: flex;
    gap: 10px;
}

.password-field input {
    flex: 1;
}

.eye-button {
    padding: 8px;
    cursor: pointer;
}

.buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.edit-btn {
    background-color: #4CAF50;
    color: white;
}

.save-btn {
    background-color: #2196F3;
    color: white;
}

.back-btn {
    background-color: #607D8B;
    color: white;
}

.alert {
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
}

.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

.loading {
    text-align: center;
    padding: 20px;
}
</style>