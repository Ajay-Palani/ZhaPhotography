<template>
  <v-container class="mt-6">
    <h1 class="text-center mb-6">Need Help?</h1>

    <!-- FAQ / Info Section -->
    <v-card outlined class="mb-6">
      <v-card-title class="text-h6">Common Questions</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>How do I book a shoot?</v-list-item-title>
              <v-list-item-subtitle>Use the contact page or WhatsApp link below to schedule your session.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Can I customize a package?</v-list-item-title>
              <v-list-item-subtitle>Yes! All our packages are negotiable and customizable.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>What is the delivery timeline?</v-list-item-title>
              <v-list-item-subtitle>Photos within 3 weeks, albums in 30–40 days, candid videos in 2 months.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Direct Contact Options -->
    <v-card outlined>
      <v-card-title class="text-h6">Still Need Help? Contact Us</v-card-title>
      <v-card-text>
        <v-row dense align="center" class="mb-3">
          <v-col cols="1"><v-icon color="green">mdi-phone</v-icon></v-col>
          <v-col cols="11">
            <a href="tel:9840511564">9840511564</a>
          </v-col>
        </v-row>

        <v-row dense align="center" class="mb-3">
          <v-col cols="1"><v-icon color="red">mdi-email</v-icon></v-col>
          <v-col cols="11">
            <a href="mailto:yourmail@example.com">yourmail@example.com</a>
          </v-col>
        </v-row>

        <v-row dense align="center" class="mb-3">
          <v-col cols="1"><v-icon color="blue">mdi-instagram</v-icon></v-col>
          <v-col cols="11">
            <a href="https://www.instagram.com/yourprofile" target="_blank">Instagram</a>
          </v-col>
        </v-row>

        <v-row dense align="center" class="mb-3">
          <v-col cols="1"><v-icon color="indigo">mdi-facebook</v-icon></v-col>
          <v-col cols="11">
            <a href="https://www.facebook.com/yourpage" target="_blank">Facebook</a>
          </v-col>
        </v-row>

        <v-row dense align="center">
          <v-col cols="1"><v-icon color="green">mdi-whatsapp</v-icon></v-col>
          <v-col cols="11">
            <a href="https://wa.me/9840511564" target="_blank">WhatsApp</a>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Help",
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #1976d2;
}
</style>
