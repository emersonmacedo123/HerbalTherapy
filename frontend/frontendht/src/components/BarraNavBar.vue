<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- ... código existente ... -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/servicosoferecidos">Serviços</router-link>
        </li>
        <!-- Links para usuários não autenticados -->
        <template v-if="!isAuthenticated">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registration">Criar Conta</router-link>
          </li>
        </template>
        <!-- Links para usuários autenticados -->
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/perfilcliente">Meu Perfil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/agendamentos">Agendar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/history">Histórico</router-link>
          </li>
          <li class="nav-item">
            <a @click="handleLogout" class="nav-link" style="cursor: pointer;">Logout</a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
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