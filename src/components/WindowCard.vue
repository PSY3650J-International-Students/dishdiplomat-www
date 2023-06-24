<template>
  <v-card min-width=300px max-width=400px class="mx-auto">
    <v-card-title>
      <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
      {{ props.window.name }}
    </v-card-title>
  </v-card>
  <v-spacer />
</template>


<script lang="ts" setup>
  import { ref } from 'vue'
  import { CanteenWindow } from '@/types/CanteenWindow'
  import { PropType } from 'vue'
  const props = defineProps(
    {
      window: {
        type: Object as PropType<CanteenWindow>,
        required: true
      }
    }
  )
</script>
