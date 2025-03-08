<template>
    <div class="service-container">
      <h2>Terapia com Fitoterapia</h2>
      <div class="service-content">
        <div class="service-image">
          <img src="../assets/fitoterapia.jpg" alt="Fitoterapia" />
        </div>
        <div class="service-description">
          <p class="intro">
            A <strong>Fitoterapia</strong> é uma prática terapêutica milenar que utiliza
            plantas medicinais para prevenir e tratar diversas condições de saúde.
            Baseada no conhecimento tradicional e em evidências científicas, a
            fitoterapia oferece uma abordagem natural e integrativa para o bem-estar.
          </p>
          <p>
            Nossa terapia com Fitoterapia oferece uma avaliação completa e
            individualizada, com a seleção das plantas mais adequadas para suas
            necessidades.
          </p>
          <h3>Benefícios da Fitoterapia:</h3>
          <ul>
            <li>Tratamento de diversas condições de saúde</li>
            <li>Fortalecimento do sistema imunológico</li>
            <li>Redução dos efeitos colaterais de medicamentos</li>
            <li>Promoção do bem-estar geral</li>
            <li>Abordagem natural e integrativa</li>
          </ul>
          <p class="price">Valor da sessão: R$ 90,00</p>
          <button @click="agendarServico">Agendar Serviço</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServicoFitoterapia",
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
  
  h3 {
    color: #2c3e50;
    margin-top: 20px;
    margin-bottom: 10px;
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
  
  .intro {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .intro strong {
    font-weight: bold;
    color: #34495e;
  }
  
  @media (max-width: 768px) {
    .service-content {
      flex-direction: column;
    }
  }
  </style>