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
export default {
    name: 'ClientePerfil',
    data() {
        return {
            isEditing: false,
            showPassword: false,
            profile: {
                fullName: 'João Silva',
                email: 'joao@email.com',
                phone: '(11) 99999-9999',
                address: 'Rua Example, 123',
                password: '********'
            }
        }
    },
    methods: {
        toggleEdit() {
            this.isEditing = !this.isEditing
        },
        togglePassword() {
            this.showPassword = !this.showPassword
        },
        saveChanges() {
            // Aqui você implementaria a lógica para salvar as alterações
            this.isEditing = false
            alert('Alterações salvas com sucesso!')
        },
        goBack() {
            this.$router.go(-1)
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
</style>