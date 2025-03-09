<template>
    <div class="admin-view">
      <h2>Lista de Usuários</h2>
      <div v-if="loading">Carregando...</div>
      <div v-else>
        <table v-if="users.length">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.telephone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import userService from '@/services/userService';
  
  export default {
    name: 'AdminView',
    data() {
      return {
        users: [],
        loading: true
      }
    },
    async created() {
      try {
        this.users = await userService.getAllUsers();
      } catch (error) {
        console.error('Erro ao carregar usuários:', error);
      } finally {
        this.loading = false;
      }
    }
  }
  </script>