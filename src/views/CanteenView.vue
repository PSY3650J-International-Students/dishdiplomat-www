<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height">
      <h1 class="text-h2 font-weight-bold text-center">{{canteen.name}}</h1>
      <v-row class="d-flex align-center">
        <v-col cols="auto" v-for="window in canteen.window_list" >
          <WindowCard :window="window" cols="auto"></WindowCard>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Canteen } from '@/types/Canteen'
import { canteenList } from '@/store/CanteenList'
import { ref } from 'vue'
import { watch } from 'vue'
import WindowCard from '@/components/WindowCard.vue'
const route = useRoute()

const canteen = ref<Canteen>(canteenList[0])
for (var canteen_inst of canteenList) {
  if (canteen_inst.path == route.params.canteen_path) {
    canteen.value = canteen_inst
  }
}

watch(() => route.params.canteen_path, (canteen_path) => {
  for (var canteen_inst of canteenList) {
    if (canteen_inst.path == canteen_path) {
      canteen.value = canteen_inst
    }
  }
})

</script>
