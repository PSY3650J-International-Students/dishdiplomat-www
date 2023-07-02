<template>
  <v-card
    min-width="300px"
    max-width="340px"
    class="mx-auto"
    @click.stop="openDialog"
  >
    <v-img
      :src="window.cover_picture"
      width="100%"
    ></v-img>
    <v-card-title>
      {{ window.name }}
    </v-card-title>
  </v-card>
  <v-spacer />
  <v-dialog v-model="dialogOpen" persistent max-width="500px" fullscreen activator="parent">
    <v-card>
      <span>{{ '' }}</span>
      <br>
      <v-toolbar dense class="close-button-toolbar">
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text style="max-height: 600px; overflow-y: auto;">
        <template v-if="window.dishes.length === 0">
          Sorry, We will add dish later!
        </template>
        <v-carousel cycle height="600px" show-arrows="hover">
          <v-carousel-item v-for="dish in window.dishes" :key="dish.name">
            <v-btn @click="selectDish(dish)">
                {{ dish.selected ? 'Selected' : 'Select' }}
            </v-btn>
            <v-card-text>
              <DishPage :dish="dish" />
            </v-card-text>
          </v-carousel-item> 
        </v-carousel>
      
        <div v-if="selectedPages.length > 0">
          <h3>Selected Dishes:</h3>
          <v-card v-for="(page, index) in selectedPages" :key="index">
            <p>{{ page }}</p>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.carousel-container {
  overflow-y: auto;
}
</style>

<script lang="ts" setup>
import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';
import { PropType, ref } from 'vue';
import DishPage from './DishPage.vue';
//import { Dish } from '@/types/Dish';
  const props = defineProps(
    {
      window: {
        type: Object as PropType<CanteenWindow>,
        required: true
      },
      canteen: {
        type: Object as PropType<Canteen>,
        required: true
      }
    }
  )
  const get_window_path = (canteen: Canteen, window: CanteenWindow)=>{
    return '/canteen/'+canteen.path+'/'+window.path
  }


const dialogOpen = ref(false);
const selectedPages = ref<string[]>([]);

const openDialog = (event?: Event) => {
  if (event) {
    event.stopPropagation();
  }
  dialogOpen.value = true;
};

const closeDialog = () => {
  dialogOpen.value = false;
};

const selectDish = (dish: any) => {
  dish.selected = !dish.selected;

  if (dish.selected) {
    selectedPages.value.push(dish.name);
  } else {
    const index = selectedPages.value.indexOf(dish.name);
    if (index !== -1) {
      selectedPages.value.splice(index, 1);
    }
  }
};

</script>