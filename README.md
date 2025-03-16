# HerbalTherapy

## Acesso ao Projeto

### Repositório GitHub
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/HerbalTherapy.git
cd HerbalTherapy
```

### Configuração MongoDB Atlas
1. Já está configurado e disponível em cloud:
   - URL: https://cloud.mongodb.com
   - Cluster: herbaltherapy-cluster
   - Database: herbaltherapy

2. Credenciais MongoDB Atlas:
   - Email: professor@herbaltherapy.com
   - Senha: PAW2025@cluster
   
3. String de conexão (já configurada no backend):
```
mongodb+srv://professor:PAW2025@herbaltherapy-cluster.mongodb.net/herbaltherapy
```

### Executando o Projeto

1. Backend:
```bash
cd backend
npm install
npm start
```

2. Frontend:
```bash
cd frontend/frontendht
npm install
npm run serve
```

### Contas para Teste
1. Administrador:
   - Email: admin@herbaltherapy.com
   - Senha: admin123

2. Usuário Regular:
   - Email: user@herbaltherapy.com
   - Senha: user123

### Observações Importantes
- O banco de dados já está populado com dados de teste
- As credenciais do MongoDB Atlas são exclusivas para avaliação
- O projeto está conectado automaticamente ao cluster na nuvem
- Não é necessária configuração local do MongoDB