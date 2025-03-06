<template>
    <div class="consultas-historico">
        <h2>Histórico de Consultas</h2>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Data e Hora</th>
                        <th>Local</th>
                        <th>Especialidade</th>
                        <th>Duração</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="consulta in consultas" :key="consulta.id">
                        <td>{{ consulta.dataHora }}</td>
                        <td>{{ consulta.local }}</td>
                        <td>{{ consulta.especialidade }}</td>
                        <td>{{ consulta.duracao }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConsultasHistorico',
    data() {
        return {
            consultas: [
                {
                    id: 1,
                    dataHora: '15/05/2023 14:30',
                    local: 'Clínica Verde Vida',
                    especialidade: 'Fitoterapia',
                    duracao: '45 min'
                },
                {
                    id: 2,
                    dataHora: '03/04/2023 10:00',
                    local: 'Centro Herbal Care',
                    especialidade: 'Aromaterapia',
                    duracao: '60 min'
                },
                {
                    id: 3,
                    dataHora: '22/03/2023 16:15',
                    local: 'Espaço Natureza',
                    especialidade: 'Fitoterapia',
                    duracao: '30 min'
                }
            ]
        }
    }
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
</style>