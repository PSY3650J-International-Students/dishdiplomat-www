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
      <v-card-text style="overflow-y: auto;">
        <template v-if="window.dishes.length == 0">
          <p class="text-center absent-text">
            Sorry! This area is still under construction.
          </p>
        </template>
        <template v-else>
          <DishWindow :dishes=props.window.dishes />
        </template>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.carousel-container {
  overflow-y: auto;
}
  .absent-text {
    color: grey;
    font-size: 20px;
  }
</style>


<script lang="ts" setup>
  import { Canteen } from '@/types/Canteen';
  import { CanteenWindow } from '@/types/CanteenWindow';
  import { PropType, ref } from 'vue';
  import DishPage from './DishPage.vue';
  import DishWindow from './DishWindow.vue';
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
