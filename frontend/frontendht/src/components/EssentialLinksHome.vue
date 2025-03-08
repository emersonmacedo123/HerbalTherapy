<template>
    <div class="navigation-container">
        <!-- Main navigation links -->
        <div class="main-links">
            <router-link to="/login" class="nav-link">Login</router-link>
            <span class="separator">/</span>
            <router-link to="/registration" class="nav-link">Cadastrar</router-link>
            <span class="separator">/</span>
            <router-link to="/servicosoferecidos" class="nav-link">Nossos serviços</router-link>
        </div>

        <!-- Social media icons -->
        <div class="social-links">
            <a href="#" class="social-icon">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="social-icon">
                <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="social-icon">
                <i class="bi bi-whatsapp"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EssentialLinksHome'
}
</script>


<style scoped>
.navigation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}

.main-links {
    font-size: 1.1rem;
    display: flex; /* Adicione esta linha */
    align-items: center; /* Adicione esta linha */
    gap: 0.5rem; /* Adicione esta linha para espaçamento entre os links */
}

.main-links {
    font-size: 1.1rem;
}

.nav-link {
    text-decoration: none;
    color: #2c3e50;
    padding: 0 0.5rem;
}

.nav-link:hover {
    color: #42b983;
}

.separator {
    color: #2c3e50;
}

.social-links {
    display: flex;
    gap: 1.5rem;
}

.social-icon {
    color: #2c3e50;
    font-size: 1.5rem;
    text-decoration: none;
}

.social-icon:hover {
    color: #42b983;
}
</style>