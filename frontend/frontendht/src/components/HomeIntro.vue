<template>
    <div class="home-intro">
        <div class="logo-container">
            <img src="../assets/new_logo.jpeg" alt="HerbalTherapy Logo" class="logo">
        </div>
        <h1 class="welcome-text">Bem-vindo ao HerbalTherapy</h1>
    </div>
</template>

<script>
export default {
    name: 'HomeIntro'
}
</script>

<style scoped>
.home-intro {
    text-align: center;
    padding: 2rem;
}

.logo-container {
    margin-bottom: 2rem;
    size: 200px;
}

.logo {
    max-width: 500px;
    height: auto;
}

.welcome-text {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
</style>