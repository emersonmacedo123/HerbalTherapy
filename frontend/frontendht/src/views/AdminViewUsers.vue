<template>
  <div class="admin-view">
      <h2>Lista de Usuários</h2>
      <div class="table-container">
          <div v-if="loading" class="loading">Carregando...</div>
          <table v-else>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Telefone</th>
                      <th>Endereco</th>
                      <th>Idade</th>
                      <th>Ações</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="user in users" :key="user._id">
                      <td>{{ user.fullName }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.phone }}</td>
                      <td>{{ user.address }}</td>
                      <td>{{ user.age }}</td>
                      <td>
                        <button @click="editUser(user)" class="edit-btn">
                            Editar
                        </button>
                        <button @click="confirmDelete(user)" class="delete-btn">
                            Deletar
                        </button>
                          
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>

  <!-- Modal de Confirmação -->
  <div v-if="showConfirmModal" class="modal">
          <div class="modal-content">
              <h3>Confirmar Exclusão</h3>
              <p>Certeza que deseja deletar o usuário {{ selectedUser?.name }}?</p>
              <div class="modal-buttons">
                  <button @click="deleteUser" class="confirm-btn">Sim</button>
                  <button @click="showConfirmModal = false" class="cancel-btn">Não</button>
              </div>
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
          loading: true,
          showConfirmModal: false,
          selectedUser: null
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
  },
  methods: {
    async editUser(user) {
        this.$router.push(`/admin/users/edit/${user._id}`);
    },
      confirmDelete(user) {
          this.selectedUser = user;
          this.showConfirmModal = true;
      },
      async deleteUser() {
          try {
              await userService.deleteUser(this.selectedUser._id);
              this.users = this.users.filter(user => user._id !== this.selectedUser._id);
              this.showConfirmModal = false;
          } catch (error) {
              console.error('Erro ao deletar usuário:', error);
          }
      }
  }
}
</script>

<style scoped>

.actions {
    display: flex;
    gap: 8px;
}

.edit-btn {
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
}

.edit-btn:hover {
    background-color: #1976D2;
}

.admin-view {
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

.loading {
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  color: #666;
}

.delete-btn {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
}

.delete-btn:hover {
    background-color: #cc0000;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    text-align: center;
}

.modal-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.confirm-btn {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.cancel-btn {
    background-color: #666;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.confirm-btn:hover {
    background-color: #cc0000;
}

.cancel-btn:hover {
    background-color: #444;
}
</style>