<template>
    <div class="service-container">
      <h2>Terapia com Angélica</h2>
      <div class="service-content">
        <div class="service-image">
          <img src="../assets/angelica.jpeg" alt="Angélica" />
        </div>
        <div class="service-description">
          <p>
            A Angélica é uma planta medicinal conhecida por suas propriedades
            revigorantes e de suporte digestivo. Nossa terapia com Angélica
            oferece diversos benefícios:
          </p>
          <ul>
            <li>Alívio de problemas digestivos</li>
            <li>Aumento da energia e vitalidade</li>
            <li>Alívio de cólicas menstruais</li>
            <li>Fortalecimento do sistema imunológico</li>
            <li>Ação antioxidante</li>
          </ul>
          <p class="price">Valor da sessão: R$ 75,00</p>
          <button @click="agendarServico">Agendar Serviço</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServicoAngelica",
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