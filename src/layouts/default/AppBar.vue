<template>
  <v-navigation-drawer v-model="drawer" :location=drawer_location>
    <v-list>
      <v-list-item to="/">Home</v-list-item>
      <v-spacer/>
      <v-list-item v-for="canteen in canteenListStore" :to=get_canteen_path(canteen) :title="canteen.name"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar flat>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-4" />
      DishDiplomat
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { canteenList } from '@/store/CanteenList'
  import { Canteen } from '@/types/Canteen'
  const drawer = ref<boolean>(false)
  const drawer_location=ref<"bottom" | "top" | "start" | "end" | "left" | "right" | undefined>("left")
  const canteenListStore = ref(canteenList)
  const get_canteen_path = (canteen: Canteen)=>{
    return '/canteen/'+canteen.path
  }
</script>
