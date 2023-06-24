<template>
  <v-card>
    <v-card-title>
      {{ props.window.name }}
    </v-card-title>
  </v-card>
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
