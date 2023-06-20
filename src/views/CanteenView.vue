<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height">
      <h1 class="text-h2 font-weight-bold">{{canteen.name}}</h1>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import { Canteen } from '@/types/Canteen'
import { canteenList } from '@/store/CanteenList'
import { ref } from 'vue'
const route = useRoute()

const canteen_path : string = route.params.canteen_path as string
const canteen = ref<Canteen>(canteenList[0])
for (var canteen_inst of canteenList) {
  if (canteen_inst.path == canteen_path) {
    canteen.value = canteen_inst
  }
}
console.log(canteen_path)
</script>
