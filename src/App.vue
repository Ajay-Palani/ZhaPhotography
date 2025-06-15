<template>
  <v-app class="app-container">
    <!-- App Bar -->
    <NavigationDrawer />

    <!-- Main content with proper padding -->
    <v-main class="app-main">
      <router-view />
    </v-main>

    <!-- Bottom Navigation -->
    <v-bottom-navigation
      app
      height="64"
      color="indigo"
      class="pt-2 bottom-nav"
    >
      <v-btn
        href="https://www.instagram.com/zha_media_work?utm_source=qr&igsh=cXphNjJmNTJ6cWxo"
        target="_blank"
        class="nav-btn"
        variant="text"
      >
        <v-icon color="purple">mdi-instagram</v-icon>
        <span class="text-caption">Instagram</span>
      </v-btn>

      <v-btn
        href="https://www.facebook.com/ajaystiff/"
        target="_blank"
        class="nav-btn"
        variant="text"
      >
        <v-icon color="blue darken-3">mdi-facebook</v-icon>
        <span class="text-caption">Facebook</span>
      </v-btn>

      <v-btn
        href="https://wa.me/7639693966"
        target="_blank"
        class="nav-btn"
        variant="text"
      >
        <v-icon color="green">mdi-whatsapp</v-icon>
        <span class="text-caption">WhatsApp</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue';
export default {
  name: "App",
  components: { NavigationDrawer },
};
</script>

<style scoped>
.app-container {
  max-width: 100vw;
  overflow-x: hidden;
}

.app-main {
  padding-bottom: 70px; /* space for bottom nav */
}

.bottom-nav .v-btn {
  box-shadow: none !important;
  background-color: transparent !important;
  flex-direction: column;
}
</style>
