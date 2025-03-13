<template>
    <div class="agendar-consulta">
        <h2>Agendar Nova Consulta</h2>
        
        <div v-if="error" class="error-message">
            {{ error }}
        </div>

        <form @submit.prevent="agendarConsulta" class="form-consulta">
            <div class="form-group">
                <label>Data e Horário:</label>
                <input type="datetime-local" v-model="appointmentData.dataHora" required>
            </div>

            <div class="form-group">
                <label>Local da Consulta:</label>
                <select v-model="appointmentData.local" required>
                    <option value="">Selecione uma clínica</option>
                    <option v-for="clinica in clinicas" :key="clinica.id" :value="clinica.nome">
                        {{ clinica.nome }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label>Especialidade:</label>
                <select v-model="appointmentData.especialidade" required>
                    <option value="">Selecione uma especialidade</option>
                    <option v-for="esp in especialidades" :key="esp.id" :value="esp.tipo">
                        {{ esp.tipo }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label>Duração da Sessão:</label>
                <select v-model="appointmentData.duracao" required>
                    <option value="">Selecione a duração</option>
                    <option value="30">30 minutos</option>
                    <option value="60">1 hora</option>
                    <option value="90">1 hora e 30 minutos</option>
                    <option value="120">2 horas</option>
                </select>
            </div>

            <div class="botoes">
                <button 
                    type="submit" 
                    class="btn-agendar"
                    :disabled="loading"
                >
                    {{ loading ? 'Agendando...' : 'Agendar' }}
                </button>
                <button 
                    type="button" 
                    class="btn-cancelar" 
                    @click="voltarHome"
                    :disabled="loading"
                >
                    Cancelar
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import appointmentService from '@/services/appointmentService';
import {mapGetters} from 'vuex';

export default {
    name: 'AgendarConsulta',
    data() {
        return {
            appointmentData: {
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
            ],
            loading: false,
            error: null
        }
    },
    computed: 
    {
        ...mapGetters(['currentUser'])
    }, 
    methods: {
        agendarConsulta() {
            try
            {
                this.loading = true;
                this.error = null;
                const m_appointmentData = 
                {
                    ...this.appointmentData,
                    userId: this.currentUser.id,
                    duracao: parseInt(this.appointmentData.duracao)
                };

                appointmentService.createAppointment(m_appointmentData);

                //show success message
                alert('Consulta agendada com sucesso!');
                this.router.push('/agendamentos');
            } catch(error)
            {
                console.error('Erro ao agendar consulta:', error);
                this.error = 'Por favor tentar novamente agendar consulta em alguns minutos';
            } finally
            {
                this.loading = false;
            }
            

            console.log('Consulta agendada:', this.appointmentData)
            this.voltarHome()
        },
        voltarHome() {
            this.$router.push('/home')
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