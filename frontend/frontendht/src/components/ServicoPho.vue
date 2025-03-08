<template>
    <div class="service-container">
      <h2>Terapia com Gou Teng</h2>
      <div class="service-content">
        <div class="service-image">
          <img src="../assets/Gouteng.jpeg" alt="Gou Teng" />
        </div>
        <div class="service-description">
          <p>
            Gou Teng, também conhecida como Uncaria, é uma erva tradicional chinesa
            valorizada por suas propriedades calmantes e de suporte cardiovascular.
            Nossa terapia com Gou Teng oferece diversos benefícios:
          </p>
          <ul>
            <li>Alívio da dor de cabeça e enxaqueca</li>
            <li>Redução da pressão arterial</li>
            <li>Alívio de espasmos e convulsões</li>
            <li>Promoção da calma e relaxamento</li>
            <li>Melhora da qualidade do sono</li>
          </ul>
          <p class="price">Valor da sessão: R$ 85,00</p>
          <button @click="agendarServico">Agendar Serviço</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServicoGouTeng",
    methods: {
      agendarServico() {
        // Implementar lógica de agendamento
        alert("Funcionalidade de agendamento em desenvolvimento");
      },
    },
  };
  </script>
  
  <style scoped>
  .service-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .service-content {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    margin-top: 20px;
  }
  
  .service-image {
    flex: 1;
  }
  
  .service-image img {
    width: 100%;
    border-radius: 8px;
  }
  
  .service-description {
    flex: 1;
  }
  
  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  
  .price {
    font-weight: bold;
    color: #2c3e50;
    margin: 20px 0;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  
  @media (max-width: 768px) {
    .service-content {
      flex-direction: column;
    }
  }
  </style>