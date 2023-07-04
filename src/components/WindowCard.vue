<template>
  <v-card
    min-width="300px"
    max-width="340px"
    class="mx-auto"
    @click.stop="openDialog"
  >
    <v-img
      :src="props.window.cover_picture"
      width="100%"
    ></v-img>
    <v-card-title>
      {{ props.window.name }}
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
        <template v-if="window.dishes.length == 0">
            Sorry, We will add dish later! 
        </template>
      <v-window height=auto>
        <template v-slot:prev="{ props }">
      <v-btn
        variant="tonal"
        density="comfortable"
        color="#2979FF"
        @click="props.onClick"
        icon= "mdi-arrow-left"
      >
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        variant="tonal"
        density="comfortable"
        color="#2979FF"
        @click="props.onClick"
        icon= "mdi-arrow-right"
      >
      </v-btn>
    </template>
        <v-window-item v-for="dish in window.dishes" :key="dish.name">
          <v-card-text>
            <DishPage :dish="dish" />
          </v-card-text>              
        </v-window-item>
        <br>
        <br>
        <br>
      </v-window>
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

  const dialogOpen = ref(false)
  let dialogTimer: ReturnType<typeof setTimeout> | null = null

    const openDialog = (event?: Event) => {
  if (event) {
    event.stopPropagation();
  }
  dialogOpen.value = true;
};

  const closeDialog = () => {
      dialogOpen.value = false
  }
</script>
