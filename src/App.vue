<template>
  <v-app>
    <!-- App Bar stays fixed -->
    <NavigationDrawer />

    <!-- Scrollable main content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Bottom Nav stays fixed -->
    <v-bottom-navigation
      app
      height="64"
      color="indigo"
      class="pt-2"
    >
      <v-btn
        href="https://www.instagram.com/zha_media_work?utm_source=qr&igsh=cXphNjJmNTJ6cWxo"
        target="_blank"
        class="mx-2 d-flex flex-column pa-2"
        variant="text"
      >
        <v-icon color="purple">mdi-instagram</v-icon>
        <span class="text-caption">Instagram</span>
      </v-btn>

      <v-btn
        href="https://www.facebook.com/ajaystiff/"
        target="_blank"
        class="mx-2 d-flex flex-column"
        variant="text"
      >
        <v-icon color="blue darken-3">mdi-facebook</v-icon>
        <span class="text-caption">Facebook</span>
      </v-btn>

      <v-btn
        href="https://wa.me/7639693966"
        target="_blank"
        class="mx-2 d-flex flex-column"
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
  components: {
    NavigationDrawer,
  },
};
</script>

<style scoped>
.v-bottom-navigation .v-btn {
  box-shadow: none !important;
  background-color: transparent !important;
}
.v-bottom-navigation .v-btn:hover {
  background-color: transparent !important;
}

</style>
