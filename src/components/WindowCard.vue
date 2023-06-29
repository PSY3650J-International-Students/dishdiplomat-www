<template>
  <v-card
    min-width=300px
    max-width=340px
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
  <v-dialog v-model="dialogOpen" persistent max-width="500px"
                                            fullscreen
          activator="parent"
        >
          <v-card>
            <v-card-text>
              <v-card-title>
              {{ props.window.name }}
              </v-card-title>
            <DishPage :dish="dish" v-for="dish in props.window.dishes" />
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>


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
