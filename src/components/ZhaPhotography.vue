<template>
  <v-container class="mt-2">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="text-center">

        <!-- Search Input -->
        <v-text-field
          v-model="searchTerm"
          label="Search by Name"
          prepend-inner-icon="mdi-magnify"
          clearable
          @input="handleSearch"
          class="mb-4"
        ></v-text-field>

        <div class="image-wrapper mx-auto">
          <v-img
            :src="filteredImage?.image"
            class="rounded-img"
            contain
          ></v-img>
        </div>

        <div class="image-title mt-2">
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
export default {
  name: 'ZhaPhotography',
  data() {
    return {
      currentIndex: 0,
      searchTerm: '',
      trending: [
        { name: "Dairy Milk Silk", image: "https://cdn.pixabay.com/photo/2024/06/22/16/24/ai-generated-8846622_1280.jpg" },
        { name: "Dark Fantasy", image: "https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg" },
        { name: "Jelly", image: "https://cdn.pixabay.com/photo/2021/08/16/19/24/boat-6551183_1280.jpg" },
        { name: "Mango Bite", image: "https://cdn.pixabay.com/photo/2024/05/11/13/41/portrait-8754981_1280.png" },
        { name: "Milky Bar", image: "https://cdn.pixabay.com/photo/2022/03/24/15/46/woman-7089304_1280.jpg" },
        { name: "Rasagulla", image: "https://cdn.pixabay.com/photo/2022/10/21/09/01/fashion-7536574_1280.jpg" },
        { name: "Kit Kat", image: "https://cdn.pixabay.com/photo/2024/05/11/13/32/portrait-8754958_1280.jpg" },
        { name: "Paalkova", image: "https://cdn.pixabay.com/photo/2022/10/21/09/01/fashion-7536575_1280.jpg" },
        { name: "Panju Mittai", image: "https://cdn.pixabay.com/photo/2016/11/29/02/28/woman-1866858_1280.jpg" },
        { name: "Eclairs", image: "https://cdn.pixabay.com/photo/2021/04/03/02/21/fashion-6146328_1280.jpg" },
      ],
    };
  },
  computed: {
    filteredImage() {
      if (!this.searchTerm) return this.trending[this.currentIndex];
      const match = this.trending.find(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      return match || null;
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
      const index = this.trending.findIndex(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (index !== -1) {
        this.currentIndex = index;
      }
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
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.rounded-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}
</style>
