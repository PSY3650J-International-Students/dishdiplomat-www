<template>
  <v-card
    flat
    rounded="0">
    <v-window v-model="cur_dish_num" class="fill-height">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
        :value="n"
      >
        <v-card
          class="d-flex justify-center align-center"
        >
          <DishPage :dish="props.dishes[n-1]"/>
        </v-card>
      </v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between">
      <v-btn
        variant="plain"
        icon="mdi-chevron-left"
        @click="prev"
        :disabled="cur_dish_num == 1"
      ></v-btn>
      <p> {{ cur_dish_num }} / {{ length }} </p>
      <v-btn
        variant="plain"
        icon="mdi-chevron-right"
        @click="next"
        :disabled="cur_dish_num == length"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
  import { Canteen } from '@/types/Canteen';
  import { Dish } from '@/types/Dish';
  import { PropType, ref } from 'vue';
  import DishPage from './DishPage.vue';
  const props = defineProps(
      {
      dishes: {
        type: Object as PropType<Dish[]>,
        required: true
      },
    }
  )
  const cur_dish_num = ref<number>(1)
  const length = ref<number>(props.dishes.length)
  const next = () => {
    cur_dish_num.value++;
  }
  const prev = () => {
    cur_dish_num.value--;
  }
</script>
