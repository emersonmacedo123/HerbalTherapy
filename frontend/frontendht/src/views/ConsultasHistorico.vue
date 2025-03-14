<template>
    <div class="consultas-historico">
        <h2>Histórico de Consultas</h2>
        <div v-if="loading" class="loading">Carregando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else-if="consultas.length === 0" class="no-data">
            Nenhuma consulta concluída encontrada.
        </div>
        <div v-else class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Data e Hora</th>
                        <th v-if="isAdmin">Cliente</th>
                        <th>Local</th>
                        <th>Especialidade</th>
                        <th>Duração</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="consulta in consultas" :key="consulta._id">
                        <td>{{ formatDateTime(consulta.dataHora) }}</td>
                        <td v-if="isAdmin">{{ consulta.userId.fullName }}</td>
                        <td>{{ consulta.local }}</td>
                        <td>{{ consulta.especialidade }}</td>
                        <td>{{ consulta.duracao }} minutos</td>
                        <td>{{ consulta.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import appointmentService from '@/services/appointmentService';
import { mapGetters } from 'vuex';

export default {
    name: 'ConsultasHistorico',
    data() {
        return {
            consultas: [],
            loading: true,
            error: null
        }
    },
    computed :
    {
        ...mapGetters(['currentUser', 'isAdmin'])
    },
    async created() {
        try {
            if (this.currentUser) {
                this.consultas = await appointmentService.getConsultasConcluidas(
                    this.currentUser.id,
                    this.isAdmin
                );
            } else {
                this.error = 'Você precisa estar logado para acessar esta página.';
            }
        } catch (error) {
            this.error = 'Ocorreu um erro ao carregar as consultas.';
        } finally {
            this.loading = false;
        }
    },
    methods: {
        formatDateTime(dateTime) {
            return new Date(dateTime).toLocaleString('pt-BR')
        }
    },
}
</script>

<style scoped>
.consultas-historico {
    padding: 20px;
}

.table-container {
    margin-top: 20px;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #4CAF50;
    color: white;
}

tr:nth-child(even) {
    background-color: #f5f5f5;
}

tr:hover {
    background-color: #e9f5e9;
}

h2 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.loading, .error, .no-data {
    text-align: center;
    padding: 20px;
    color: #666;
}

.error {
    color: #ff4444;
}
</style>