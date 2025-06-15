<template>
  <v-container fluid>
    <h2 class="text-center mb-4">{{ galleryItem?.name }} Gallery</h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(img, i) in galleryItem?.gallery || []"
        :key="i"
        class="d-flex justify-center"
      >
        <div class="image-wrapper">
          <v-img
            :src="img"
            class="image"
            contain
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pera1 from '@/assets/pera1.jpg';
import pera2 from '@/assets/Pera2.jpg';
import pera3 from '@/assets/Pera3.jpg';
import pera4 from '@/assets/Pera4.jpg';
import pera5 from '@/assets/Pera5.jpg';
import pera6 from '@/assets/Pera6.jpg';
import pera7 from '@/assets/Pera7.jpg';

export default {
  name: 'GalleryView',
  props: ['name'],
  data() {
    return {
      allItems: [
        { name: "Perarulalan", gallery: [pera1, pera2, pera3, pera4, pera5, pera6, pera7] },
      ]
    };
  },
  computed: {
    galleryItem() {
      return this.allItems.find(item => item.name.toLowerCase() === this.name.toLowerCase());
    }
  }
};
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: transparent;
}
</style>
