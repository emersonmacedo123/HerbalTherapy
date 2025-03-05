<template>
  <div class="home">
    <HomeIntro />
    <EssentialLinksHome />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from "@/components/HomeIntro.vue";
import EssentialLinksHome from "@/components/EssentialLinksHome.vue";

export default {
  name: "HomeView",
  components: {
    HomeIntro,
    EssentialLinksHome,
  },
};
</script>
