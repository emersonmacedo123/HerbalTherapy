<template>
    <div class="registration-container">
        <h2>Registro de Novo Usuário</h2>
        <form @submit.prevent="registerUser" class="registration-form">
            <div class="form-group">
                <label for="fullName">Nome Completo:</label>
                <input 
                    type="text" 
                    id="fullName" 
                    v-model="formData.fullName" 
                    required
                >
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    required
                >
            </div>

            <div class="form-group">
                <label for="phone">Telefone:</label>
                <input 
                    type="tel" 
                    id="phone" 
                    v-model="formData.phone" 
                    required
                >
            </div>

            <div class="form-group">
                <label for="address">Endereço:</label>
                <input 
                    type="text" 
                    id="address" 
                    v-model="formData.address" 
                    required
                >
            </div>

            <div class="form-group">
                <label for="password">Senha:</label>
                <input 
                    type="password" 
                    id="password" 
                    v-model="formData.password" 
                    required
                    >
                </div>
                <button type="submit" class="submit-btn">Registrar</button>
                
        <router-link to="/login" class="login-btn">Login</router-link>
        
                
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegistrationPage',
    data() {
        return {
            formData: {
                fullName: '',
                email: '',
                phone: '',
                address: '',
                password: ''
            }
        }
    },
    methods: {
        async registerUser() {
            try {
                // Aqui você implementará a lógica para enviar os dados para o backend
                console.log('Dados do formulário:', this.formData)
                // TODO: Adicionar chamada API para registrar usuário
            } catch (error) {
                console.error('Erro ao registrar:', error)
            }
        }
    }
}
</script>

<style scoped>
.registration-container {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.registration-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-weight: bold;
}

input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.submit-btn {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

.submit-btn:hover {
    background-color: #45a049;
}
.login-btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: #808080;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
}

.login-btn:hover {
    background-color: #696969;
}
</style>