<template>
    <div class="consultas-agendadas">
        <h2>Consultas Agendadas</h2>
        <div v-if="loading" class="loading">Carregando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else-if="consultas.length === 0" class="no-data">
            Você não possui consultas agendadas.
        </div>
        <table class="consultas-table">
            <thead>
                <tr>
                    <th>Data e Hora</th>
                    <th>Cliente</th>
                    <th>Clínica</th>
                    <th>Especialidade</th>
                    <th>Duração</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="consulta in consultas" :key="consulta.id">
                    <td>{{ formatDateTime(consulta.dataHora) }}</td>
                    <td>{{ consulta.userId.fullName }}</td>
                    <td>{{ consulta.local }}</td>
                    <td>{{ consulta.especialidade }}</td>
                    <td>{{ consulta.duracao }} minutos</td>
                    <td>
                        <button @click="concluirConsulta(consulta._id)" class="btn-concluir" style="margin-right: 10px;">
                            Concluir
                        </button>
                        <button @click="cancelarConsulta(consulta._id)" class="btn-cancelar">
                            Cancelar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import appointmentService from '@/services/appointmentService';
import {mapGetters} from 'vuex';

export default {
    name: 'ConsultasAgendadas',
    data() {
        return {
            consultas: [],
            loading: true,
            error: null
        }
    },
    computed: 
    {
        ...mapGetters(['currentUser', 'isAdmin'])
    },
    async created() {
    try {
        if (this.currentUser) {
            this.consultas = await appointmentService.getUserAppointments(
                this.currentUser.id, 
                this.isAdmin
            );
        }
    } catch (error) {
        console.error('Erro ao coletar consultas agendadas:', error);
        this.error = 'Erro ao coletar consultas';
    } finally {
        this.loading = false;
    }
},
    methods: {
        formatDateTime(dateTime) {
            return new Date(dateTime).toLocaleString('pt-BR')
        },
        async cancelarConsulta(appointmentId) {
            if (confirm('Deseja realmente cancelar esta consulta?')) 
            {
                try 
                {
                    await appointmentService.cancelAppointment(
                        appointmentId,
                        this.currentUser.id,
                        this.isAdmin
                    );
                    //refresh consultas depois de cancelar
                    this.consultas = await appointmentService.getUserAppointments(
                        this.currentUser.id,
                        this.isAdm
                    )
                } catch (error) {
                    console.error('Erro ao cancelar consulta:', error);
                    alert('Erro ao cancelar consulta. Tente novamente.');
                }
            }
        },
        async concluirConsulta(appointmentId)
        {
            if (confirm('Consulta foi realmente concluida?'))
            {
                try
                {
                    await appointmentService.finishAppointment(
                        appointmentId,
                        this.currentUser.id,
                        this.isAdmin
                    );
                    //refresh consultas depois de concluir
                    this.consultas = await appointmentService.getUserAppointments(
                        this.currentUser.id,
                        this.isAdmin
                    );
                } catch (error) {
                    console.error('Erro ao concluir consulta:', error);
                    alert('Erro ao concluir consulta. Tente novamente.');
                }
            }
        }
    }
}
</script>

<style scoped>
.consultas-agendadas {
    padding: 20px;
}
.btn-concluir {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-concluir:hover {
    background-color: #45a049;
}
.consultas-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.consultas-table th,
.consultas-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.consultas-table th {
    background-color: #f4f4f4;
}

.btn-cancelar {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-cancelar:hover {
    background-color: #cc0000;
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