<template>
    <div class="login-container">
        <div class="login-box">
            <h1>Login</h1>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        v-model="email" 
                        required 
                        placeholder="Enter your email"
                    >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="password" 
                        required 
                        placeholder="Enter your password"
                    >
                </div>
                <button type="submit" class="login-btn">Sign In</button>
            </form>
            <!-- Adicionado aqui dentro do template -->
            <div class="register-link">
                <button @click="$router.push('/registration')" class="register-btn">Cadastrar</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleLogin() {
            // Add your login logic here
            console.log('Login attempt:', { email: this.email, password: this.password })
        }
    }
}
</script>

<style scoped>
.login-container {
    min-height: 100vh; /* alterado de height para min-height */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px 0; /* adicionado padding para evitar que o conteúdo toque as bordas */
}

.login-box {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

.login-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.login-btn:hover {
    background-color: #45a049;
}
</style>
<div class="register-link">
    <button @click="$router.push('/register')" class="register-btn">Register</button>
</div>

<style scoped>
.register-link {
    margin-top: 1rem;
    text-align: center;
}

.register-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #808080;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.register-btn:hover {
    background-color: #666666;
}
</style>