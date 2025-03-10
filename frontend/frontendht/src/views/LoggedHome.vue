<template>
    <div class="logged-home">
        <h1>Bem-vindo(a)</h1>
        <div class="options-container">
            <div class="option-card" @click="goToSchedule">
                <i class="fas fa-calendar-plus"></i>
                <h2>Agendar Consulta</h2>
            </div>

            <div class="option-card" @click="goToHistory">
                <i class="fas fa-history"></i>
                <h2>Ver Consultas Anteriores</h2>
            </div>

            <div class="option-card" @click="goToProfile">
                <i class="fas fa-user-circle"></i>
                <h2>Meu Perfil</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoggedHome',
    methods: {
        goToSchedule() {
            this.$router.push('/schedule')
        },
        goToHistory() {
            this.$router.push('/history')
        },
        goToProfile() {
            this.$router.push('/profile')
        }
    }
}
</script>

<style scoped>
.logged-home {
    padding: 2rem;
    text-align: center;
}

.options-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    flex-wrap: wrap;
}

.option-card {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;
}

.option-card:hover {
    transform: translateY(-5px);
}

.option-card i {
    font-size: 3rem;
    color: #4CAF50;
    margin-bottom: 1rem;
}

.option-card h2 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
}
</style>