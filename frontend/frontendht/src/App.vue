<template>
  <div>
    <BarraNavBar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import BarraNavBar from './components/BarraNavBar.vue';
import Footer from './components/FooterBar.vue';
export default {
  components: {
    BarraNavBar, 
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>