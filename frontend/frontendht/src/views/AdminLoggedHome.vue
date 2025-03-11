<template>
    <div class="logged-home">
        <h1>Área de Administração</h1>
        <div class="icon-container">
            <!-- Agendamentos -->
            <div class="icon-item" @click="goToAgendamentos">
                <i class="fas fa-calendar-alt"></i>
                <p>Todos os Agendamentos</p>
            </div>

            <!-- Histórico -->
            <div class="icon-item" @click="goToHistorico">
                <i class="fas fa-history"></i>
                <p>Histórico de Consultas</p>
            </div>

            <!-- Gestão de Usuários -->
            <div class="icon-item" @click="goToUsers">
                <i class="fas fa-users-cog"></i>
                <p>Gestão de Usuários</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminLoggedHome',
    methods: {
        goToAgendamentos() {
            this.$router.push('/agendamentos')
        },
        goToHistorico() {
            this.$router.push('/history')
        },
        goToUsers() {
            this.$router.push('/admin/users')
        }
    }
}
</script>

<style scoped>
.logged-home {
    padding: 20px;
    text-align: center;
}

.icon-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.icon-item {
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
    transition: transform 0.2s;
    width: 200px;
}

.icon-item:hover {
    transform: scale(1.05);
    background-color: #e0e0e0;
}

.icon-item i {
    font-size: 3em;
    color: #4CAF50;
    margin-bottom: 10px;
}

.icon-item p {
    margin: 10px 0 0;
    color: #333;
    font-size: 1.1em;
}

h1 {
    color: #2c3e50;
    margin-bottom: 30px;
}
</style>