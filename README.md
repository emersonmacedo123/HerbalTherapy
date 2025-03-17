# Universidade Aberta de Portugal UaB
# Programação Avançada Web - 2024/25
# HerbalTherapy - Sistema de Agendamento de Fitoterapias

## Projeto com Deploy disponível em:
- Frontend: https://inquisitive-toffee-4c7ceb.netlify.app/ 
- Backend: https://herbaltherapy.onrender.com/ 

## Contas para Teste
1. Administrador:
   - Email: admin@admin
   - Senha: admin

2. Usuário Regular:
   - Email: therapy@therapy
   - Senha: therapy

3. Novos usuários: 
   - Tambem é possível adicionar novo usuário ao cadastrar.
   - Novos usuários são por padrão usuários regulares.
   - Somente admin pode transformá-los em admin. 

## Funcionalidades
- Página inicial e lista de serviços / terapias
- Registro e login de usuários
- Agendamento de consultas
- Visualização de histórico de consultas
- Perfil do usuário editável
- Área administrativa com:
  - Gestão de usuários
  - Gestão de consultas
  - Visualização de todos os agendamentos

## Tecnologias Utilizadas
- Frontend: Vue.js 3
- Backend: Node.js + Express
- Banco de Dados: MongoDB Atlas
- Deploy: Netlify (frontend) e Render (backend)

## Executando Localmente (Opcional)

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn
- Git

### Backend
```bash
cd backend
npm install
npm start
```
Servidor iniciará em http://localhost:3000

### Frontend
```bash
cd frontend/frontendht
npm install
npm run serve
```
Aplicação iniciará em http://localhost:8080

# Estrutura do projeto 
herbaltherapy/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/
    └── frontendht/
        ├── src/
        │   ├── components/
        │   ├── views/
        │   ├── services/
        │   └── store/
        └── public/

# Banco de dados do projeto
É executado em MongoDb Cloud service.

# Autor:
Emerson Macedo
Estudante da Universidade Aberta de Portugal
Programação Avançaca Web - 2024/2025. 