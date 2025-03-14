<template>
    <div class="logged-home">
        <h1>Area do Cliente</h1>

        <!-- User Section -->
        <div class="options-container">
            <div class="option-card" @click="goToSchedule">
                <i class="fas fa-calendar-plus"></i>
                <h2>Agendar Consulta</h2>
            </div>

            <div class="option-card" @click="goToAgendamentos">
                        <i class="fas fa-calendar-alt"></i>
                        <h2>Todos os Agendamentos</h2>
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
        
        <!-- Admin Section -->
        <template v-if="isAdmin">
            <div class="admin-section">
                <h1>Área exclusiva do Admin</h1>
                <div class="options-container">
                    <div class="option-card" @click="goToAgendamentos">
                        <i class="fas fa-calendar-alt"></i>
                        <h2>Todos os Agendamentos</h2>
                    </div>

                    <div class="option-card" @click="goToHistorico">
                        <i class="fas fa-history"></i>
                        <h2>Histórico de Consultas</h2>
                    </div>

                    <div class="option-card" @click="goToUsers">
                        <i class="fas fa-users-cog"></i>
                        <h2>Gestão de Usuários</h2>
                    </div>
                </div>
            </div>
        </template>

        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LoggedHome',
    computed: {
        ...mapGetters(['isAdmin'])
    },
    methods: {
        // Existing methods
        goToSchedule() {
            this.$router.push('/schedule')
        },
        goToHistory() {
            this.$router.push('/history')
        },
        goToProfile() {
            this.$router.push('/perfilcliente')
        },
        // Admin methods
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

.admin-section {
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 10px;
}

.admin-section h2 {
    color: #2c3e50;
    margin-bottom: 2rem;
}

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