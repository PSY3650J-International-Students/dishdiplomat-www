<template>
  <v-card
    min-width=300px
    max-width=400px
    class="mx-auto"
    :to=get_window_path(props.canteen,props.window)
    >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      width="100%"
    ></v-img>
    <v-card-title>
      {{ props.window.name }}
    </v-card-title>
  </v-card>
  <v-spacer />
</template>


<script lang="ts" setup>
  import { ref } from 'vue'
  import { CanteenWindow } from '@/types/CanteenWindow'
  import { Canteen } from '@/types/Canteen'
  import { PropType } from 'vue'
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
</script>
