<template>
  <v-container class="mt-4">
    <h1 class="text-center mb-6">Pricing</h1>

    <!-- Base Services -->
    <v-card class="mb-6" outlined>
      <v-card-title class="text-h6">Base Services</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>1 Traditional Photographer - ₹10,000</v-list-item>
          <v-list-item>1 Traditional Videographer - ₹12,000</v-list-item>
          <v-list-item>1 Candid Photographer - ₹18,000</v-list-item>
          <v-list-item>1 Candid Film - ₹25,000</v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Album Pricing -->
    <v-card class="mb-6" outlined>
      <v-card-title class="text-h6">Album Options</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>1 Album (120 Pictures) – ₹12,000</v-list-item>
          <v-list-item>1 Album (250 Pictures) – ₹20,000</v-list-item>
        </v-list>
        <p class="mt-2 text-body-2">
          Includes suede velvet wooden box & pad with couple's name.<br />
          Album size: 12 x 30 inches · Lustre sheet - 250 gsm
        </p>
      </v-card-text>
    </v-card>

    <!-- Engagement Package -->
    <v-card class="mb-6" outlined>
      <v-card-title class="text-h6">Engagement Package</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>1 Traditional Photographer</v-list-item>
          <v-list-item>1 Traditional Videographer</v-list-item>
          <v-list-item>1 Candid Photographer</v-list-item>
          <v-list-item>1 Album (120 Pictures)</v-list-item>
          <v-list-item>Complimentary: 2 Couple Frames</v-list-item>
        </v-list>
        <strong>Total: ₹50,000 (Negotiable & Customizable)</strong>
      </v-card-text>
    </v-card>

    <!-- Reception & Wedding Package -->
    <v-card class="mb-6" outlined>
      <v-card-title class="text-h6">Reception & Wedding Package</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>1 Traditional Photographer (Reception & Wedding)</v-list-item>
          <v-list-item>1 Traditional Videographer (Reception & Wedding)</v-list-item>
          <v-list-item>1 Candid Photographer (Reception & Wedding)</v-list-item>
          <v-list-item>1 Candid Film (Reception & Wedding)</v-list-item>
          <v-list-item>2 Albums (250 Pictures Each)</v-list-item>
          <v-list-item>Complimentary: 2 Couple Frames, Magazine, Pre/Post Wedding Shoot</v-list-item>
          <v-list-item>Candid Film (5 mins) – Delivered within 2 months</v-list-item>
        </v-list>
        <strong>Total: ₹1,50,000 (Negotiable & Customizable)</strong>
      </v-card-text>
    </v-card>

    <!-- Full Package -->
    <v-card class="mb-6" outlined>
      <v-card-title class="text-h6">Engagement + Reception + Wedding Package</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>All services from Engagement, Reception & Wedding</v-list-item>
          <v-list-item>3 Albums – 1 (120 Pictures), 2 (250 Pictures)</v-list-item>
          <v-list-item>Complimentary: 2 Couple Frames, Magazine, Pre/Post Wedding Shoot</v-list-item>
          <v-list-item>Candid Teaser (5 mins) + Film (1–2 mins) – Delivered within 2 months</v-list-item>
        </v-list>
        <strong>Total: ₹1,90,000 (Negotiable & Customizable)</strong>
      </v-card-text>
    </v-card>

    <!-- Add-On Services -->
    <v-card class="mb-6" outlined>
      <v-card-title class="text-h6">Add-On Services</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>Live Streaming – ₹15,000/session</v-list-item>
          <v-list-item>Drone – ₹12,000/session</v-list-item>
          <v-list-item>LED Wall: 8x6 ft – ₹15,000 | 12x8 ft – ₹22,000</v-list-item>
          <v-list-item>360° Photo Booth / Photo Booth – ₹18,000</v-list-item>
          <v-list-item>Mixing Unit – ₹15,000/session</v-list-item>
          <v-list-item>AI Powered Galleries – ₹7,000</v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Terms -->
    <v-card outlined>
      <v-card-title class="text-h6">Terms & Conditions</v-card-title>
      <v-card-text>
        <ul class="text-body-2">
          <li>50% advance required to block dates.</li>
          <li>Remaining 50% due after first set of edited images delivered.</li>
          <li>Each session duration is 5–6 hours.</li>
          <li>Travel, food & accommodation to be borne by the client.</li>
          <li>Data retained for 1 year from event date.</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Price",
};
</script>
