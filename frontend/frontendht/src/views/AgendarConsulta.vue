<template>
    <div class="agendar-consulta">
        <h2>Agendar Nova Consulta</h2>
        
        <form @submit.prevent="agendarConsulta" class="form-consulta">
            <div class="form-group">
                <label>Data e Horário:</label>
                <input type="datetime-local" v-model="consulta.dataHora" required>
            </div>

            <div class="form-group">
                <label>Local da Consulta:</label>
                <select v-model="consulta.local" required>
                    <option value="">Selecione uma clínica</option>
                    <option v-for="clinica in clinicas" :key="clinica.id" :value="clinica.nome">
                        {{ clinica.nome }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label>Especialidade:</label>
                <select v-model="consulta.especialidade" required>
                    <option value="">Selecione uma especialidade</option>
                    <option v-for="esp in especialidades" :key="esp.id" :value="esp.tipo">
                        {{ esp.tipo }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label>Duração da Sessão:</label>
                <select v-model="consulta.duracao" required>
                    <option value="">Selecione a duração</option>
                    <option value="30">30 minutos</option>
                    <option value="60">1 hora</option>
                    <option value="90">1 hora e 30 minutos</option>
                    <option value="120">2 horas</option>
                </select>
            </div>

            <div class="botoes">
                <button type="submit" class="btn-agendar">Agendar</button>
                <button type="button" class="btn-cancelar" @click="voltarHome">Cancelar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AgendarConsulta',
    data() {
        return {
            consulta: {
                dataHora: '',
                local: '',
                especialidade: '',
                duracao: ''
            },
            clinicas: [
                { id: 1, nome: 'Clínica 01' },
                { id: 2, nome: 'Clínica 02' },
                { id: 3, nome: 'Clínica 03' }
            ],
            especialidades: [
                { id: 1, tipo: 'Terapia Tipo 1' },
                { id: 2, tipo: 'Terapia Tipo 2' },
                { id: 3, tipo: 'Terapia Tipo 3' }
            ]
        }
    },
    methods: {
        agendarConsulta() {
            // Aqui você implementaria a lógica para salvar a consulta
            console.log('Consulta agendada:', this.consulta)
            this.voltarHome()
        },
        voltarHome() {
            this.$router.push('/loggedHome')
        }
    }
}
</script>

<style scoped>
.agendar-consulta {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-consulta {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

label {
    font-weight: bold;
}

input, select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.botoes {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-agendar {
    background-color: #4CAF50;
    color: white;
}

.btn-cancelar {
    background-color: #f44336;
    color: white;
}

button:hover {
    opacity: 0.9;
}
</style>