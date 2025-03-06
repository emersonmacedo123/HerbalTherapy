<template>
    <div class="services-grid">
        <div class="service-card">
            <div class="service-image">
                <img src="@/assets/camomile.jpeg" alt="Camomila" />
            </div>
            <div class="service-content">
                <h2>Terapia por Camomila</h2>
                <div class="service-description">
                    <p>A camomila é conhecida por suas propriedades calmantes e anti-inflamatórias.</p>
                    <p>Benefícios:</p>
                    <ul>
                        <li>Ansiedade</li>
                        <li>Insônia</li>
                        <li>Problemas digestivos</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicoCamomila',
}
</script>

<style scoped>
.services-grid {
    padding: 20px;
}
.service-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}
.service-image img {
    width: 100%;
    height: auto;
}
.service-content {
    padding: 20px;
}
</style>