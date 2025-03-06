<template>
    <div class="consultas-agendadas">
        <h2>Consultas Agendadas</h2>
        <table class="consultas-table">
            <thead>
                <tr>
                    <th>Data e Hora</th>
                    <th>Clínica</th>
                    <th>Especialidade</th>
                    <th>Duração</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="consulta in consultas" :key="consulta.id">
                    <td>{{ formatDateTime(consulta.dataHora) }}</td>
                    <td>{{ consulta.clinica }}</td>
                    <td>{{ consulta.especialidade }}</td>
                    <td>{{ consulta.duracao }} minutos</td>
                    <td>
                        <button @click="cancelarConsulta(consulta.id)" class="btn-cancelar">
                            Cancelar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ConsultasAgendadas',
    data() {
        return {
            consultas: [
                // Dados de exemplo - substituir pela integração com API
                {
                    id: 1,
                    dataHora: '2023-12-20T14:30:00',
                    clinica: 'Clínica Exemplo',
                    especialidade: 'Acupuntura',
                    duracao: 60
                }
            ]
        }
    },
    methods: {
        formatDateTime(dateTime) {
            return new Date(dateTime).toLocaleString('pt-BR')
        },
        cancelarConsulta(id) {
            // Implementar lógica de cancelamento
            if (confirm('Deseja realmente cancelar esta consulta?')) {
                // Chamar API para cancelar
                console.log('Cancelando consulta:', id)
            }
        }
    }
}
</script>

<style scoped>
.consultas-agendadas {
    padding: 20px;
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
</style>