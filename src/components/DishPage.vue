<template>
  <div>
    <v-img :src="props.dish.cover_picture" :alt="props.dish.name" />
    <h1>{{ props.dish.name }}</h1>
    <h2>{{ props.dish.chinese_name }}</h2>
    <v-divider />
      <p><b>Available Spicy Levels: </b> {{ get_spicy_level_descriptions(props.dish) }} </p>
      <p><b>Religion Restrictions: </b> {{ get_religion_descriptions(props.dish) }} </p>
      <p v-if="flavor_exists(props.dish)"><b>Available flavors: </b> {{ get_flavor_choices(props.dish) }} </p>
    <v-divider />

  </div>
</template>

<script lang="ts" setup>
  import { Dish } from '@/types/Dish'
  import { ref } from 'vue'
  const props = defineProps({
    dish: {
      type: Object as () => Dish,
      required: true
    }
  })

  const flavor_exists = (dish: Dish) => {
    if (dish.flavor === undefined) {
      return false
    }
    return dish.flavor.length > 0
  }

  const get_flavor_choices = (dish: Dish) => {
    let flavors = dish.flavor
    return flavors.join(", ")
  }

  const get_spicy_level_descriptions = (dish: Dish) => {
    let spicy_levels = dish.available_spicy_level
    let spicy_level_descriptions = []
    if (spicy_levels.length == 0) {
      return "Not An Answer"
    }
    if (spicy_levels.includes(0)) {
      spicy_level_descriptions.push("Not Spicy")
    }
    if (spicy_levels.includes(1)) {
      spicy_level_descriptions.push("Mild")
    }
    if (spicy_levels.includes(2)) {
      spicy_level_descriptions.push("Medium")
    }
    if (spicy_levels.includes(3)) {
      spicy_level_descriptions.push("Hot")
    }
    if (spicy_levels.includes(4)) {
      spicy_level_descriptions.push("Extra Hot")
    }
    return spicy_level_descriptions.join(", ")
  }

  const get_religion_descriptions = (dish: Dish) => {
    let religions = dish.religion_restriction
    let religion_descriptions = []
    if (religions.length == 0) {
      return "None"
    }
    if (religions.includes(0)) {
      religion_descriptions.push("Contains pork")
    }
    if (religions.includes(1)) {
      religion_descriptions.push("Contains beef")
    }
    if (religions.includes(2)) {
      religion_descriptions.push("Not suitatble for vegetarians")
    }
    return religion_descriptions.join(", ")
  }
</script>

<style scoped>
  h2 {
    color: grey;
    font-size: 1rem;
  }
</style>
