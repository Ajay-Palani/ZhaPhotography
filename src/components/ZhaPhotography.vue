<template>
  <v-container class="mt-2" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="6" class="text-center">

        <!-- Search Input -->
        <v-text-field
          v-model="searchTerm"
          label="Search by Name"
          prepend-inner-icon="mdi-magnify"
          clearable
          @input="handleSearch"
          class="mb-4"
        ></v-text-field>

        <!-- Image -->
        <div class="image-wrapper" @click="goToGallery(filteredImage?.name)">
          <v-img
            :src="filteredImage?.image"
            class="rounded-img"
            contain
          ></v-img>
        </div>

        <!-- Title -->
        <div class="image-title mt-2" @click="goToGallery(filteredImage?.name)">
          {{ filteredImage?.name || 'No image found' }}
        </div>

        <!-- Navigation Arrows -->
        <div class="mt-4 d-flex justify-center align-center" v-if="filteredImage">
          <v-btn icon @click="prevSlide">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn icon @click="nextSlide">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pera1 from '@/assets/pera1.jpg';
export default {
  name: 'ZhaPhotography',
  data() {
    return {
      currentIndex: 0,
      searchTerm: '',
      trending: [
        { name: "Perarulalan", image: pera1 },
      ]
    };
  },
  computed: {
    filteredImage() {
      if (!this.searchTerm) return this.trending[this.currentIndex];
      return this.trending.find(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase())) || null;
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.trending.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.trending.length) % this.trending.length;
    },
    handleSearch() {
      const index = this.trending.findIndex(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      if (index !== -1) this.currentIndex = index;
    },
    goToGallery(name) {
      if (name) this.$router.push({ name: 'GalleryView', params: { name } });
    }
  }
};
</script>

<style scoped>
.image-title {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}

.image-wrapper {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
}

.rounded-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}
</style>
