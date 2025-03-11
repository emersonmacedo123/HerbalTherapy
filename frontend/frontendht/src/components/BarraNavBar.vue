<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">HerbalTherapy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Left side items -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/home">Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/servicosoferecidos">Serviços</router-link>
          </li>
        </ul>

        <!-- Right side items -->
        <ul class="navbar-nav ms-auto">
          <!-- Items for non-authenticated users -->
          <template v-if="!isAuthenticated">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registration">Criar Conta</router-link>
            </li>
          </template>

          <!-- Items for authenticated admin users -->
          <template v-if="isAuthenticated && isAdmin">
            <li class="nav-item">
              <router-link class="nav-link" to="/agendamentos">Gestão de Consultas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/history">Histórico de Consultas</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/admin/users">Gestao de Usuarios</router-link>
            </li>
            <li class="nav-item">
              <a @click="handleLogout" class="nav-link" style="cursor: pointer;">Logout</a>
            </li>
            
          </template>

          <!-- Items for authenticated non-admin users -->
          <template v-if="isAuthenticated && !isAdmin">
            <li class="nav-item">
              <router-link class="nav-link" to="/perfilcliente">Meu Perfil</router-link>
            </li>
            <li class="nav-item">
              <a @click="handleLogout" class="nav-link" style="cursor: pointer;">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'isAdmin'])
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      await this.logout();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-link {
  color: #2c3e50;
  font-weight: 500;
}

.nav-link:hover {
  color: #42b983;
}

.nav-link.router-link-exact-active {
  color: #42b983;
}
</style>