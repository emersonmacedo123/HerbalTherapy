<template>
  <div class="services">
    <h1>Nossos Serviços</h1>
    <ServicoFitoterapia />
    <ServicoCamomila />
    <ServicoGengibre />
    <ServicoPho />
    <ServicoAngelica />
    <EssentialLinksHome />
    
  </div>
</template>

<script>
import ServicoCamomila from '../components/ServicoCamomila.vue'
import ServicoGengibre from '../components/ServicoGengibre.vue'
import ServicoPho from '../components/ServicoPho.vue'
import ServicoAngelica from '@/components/ServicoAngelica.vue'
import ServicoFitoterapia from '@/components/ServicoFitoterapia.vue'
import EssentialLinksHome from "@/components/EssentialLinksHome.vue";

export default {
  name: 'ServicosOferecidos',
  components: {
    ServicoCamomila,
    ServicoGengibre,
    ServicoPho,
    ServicoAngelica,
    ServicoFitoterapia,
    EssentialLinksHome
  }
}
</script>

<style scoped>
.services {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.service-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 350px;
  margin: 0 auto;
}

.service-image {
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-content {
  padding: 15px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  color: #42b983;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.service-description {
  line-height: 1.4;
  font-size: 0.9em;
}

ul {
  margin: 5px 0;
  padding-left: 20px;
}

li {
  margin: 3px 0;
}
</style>