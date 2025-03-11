<template>
    <div class="edit-user-container">
        <h2>Editar Usuário</h2>
        <div v-if="loading" class="loading">Carregando...</div>
        <form v-else @submit.prevent="saveChanges" class="edit-form">
            <div class="form-group">
                <label>Nome Completo:</label>
                <input v-model="userData.fullName" type="text" required>
            </div>

            <div class="form-group">
                <label>Email:</label>
                <input v-model="userData.email" type="email" required>
            </div>

            <div class="form-group">
                <label>Telefone:</label>
                <input v-model="userData.phone" type="tel" required>
            </div>

            <div class="form-group">
                <label>Endereço:</label>
                <input v-model="userData.address" type="text" required>
            </div>

            <div class="form-group">
                <label>Idade:</label>
                <input v-model="userData.age" type="number">
            </div>

            <div class="form-group">
                <label>
                    <input type="checkbox" v-model="userData.isAdmin">
                    É Administrador
                </label>
            </div>

            <div class="buttons">
                <button type="submit" class="save-btn">Salvar Alterações</button>
                <button type="button" @click="goBack" class="cancel-btn">Cancelar</button>
            </div>
        </form>
    </div>
</template>

<script>
import userService from '@/services/userService';

export default {
    name: 'AdminEditUser',
    data() {
        return {
            userData: {
                fullName: '',
                email: '',
                phone: '',
                address: '',
                age: null,
                isAdmin: false
            },
            loading: true
        }
    },
    async created() {
        try {
            const userId = this.$route.params.id;
            const user = await userService.getUserById(userId);
            this.userData = { ...user };
        } catch (error) {
            console.error('Erro ao carregar usuário:', error);
        } finally {
            this.loading = false;
        }
    },
    methods: {
        async saveChanges() {
            try {
                await userService.updateUser(this.userData);
                this.$router.push('/admin/users');
            } catch (error) {
                console.error('Erro ao atualizar usuário:', error);
            }
        },
        goBack() {
            this.$router.push('/admin/users');
        }
    }
}
</script>

<style scoped>
.edit-user-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.edit-form {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.save-btn, .cancel-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.save-btn {
    background-color: #4CAF50;
    color: white;
}

.cancel-btn {
    background-color: #f44336;
    color: white;
}

.loading {
    text-align: center;
    padding: 20px;
}
</style>