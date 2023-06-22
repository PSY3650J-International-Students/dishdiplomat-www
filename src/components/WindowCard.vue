<template>
  <v-card>
    <v-card-title>
      {{ props.window.title }}
    </v-card-title>
  </v-card>
</template>


<script lang="ts" setup>
  import { Window } from '@/types/Window'
  import { ref } from 'vue'
  const props = defineProps({window: Window})
</script>
