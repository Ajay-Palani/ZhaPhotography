<template>
         <div>
        <v-app-bar height="56">
          <h1 class="pr-2">Zha</h1>
          <h3>Lightning Photography</h3>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          right
          temporary
          width="200"
          height="200"
          class="ma-2"
        >
          <v-list nav dense class="pa-0">
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item @click="home">
                <v-icon class="mr-2">mdi-home</v-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item  @click="contact">
                <v-icon class="mr-2">mdi-phone</v-icon>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item>

              <v-list-item  @click="price">
                <v-icon class="mr-2">mdi-currency-inr</v-icon>
                <v-list-item-title>Price</v-list-item-title>
              </v-list-item>

              <v-list-item  @click="help">
                <v-icon class="mr-2">mdi-help-circle</v-icon>
                <v-list-item-title>Help</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
</template>

<script>
export default{
     data: () => ({
      drawer: false,
      group: null,
    }),
    
    watch: {
      group() {
        this.drawer = false;
      },
    },
     methods: {
    home() {
      this.$router.push('/');
      this.drawer = false;
    },
    contact() {
      this.$router.push('/contact');
      this.drawer = false;
    },
    price() {
      this.$router.push('/price');
      this.drawer = false;
    },
    help() {
      this.$router.push('/help');
      this.drawer = false;
    }
  },
}
</script>