<template>
  <v-container>
      <v-img :src="props.dish.cover_picture" :alt="props.dish.picture_title" />
      <h1>{{ props.dish.name }}</h1>
      <h2>{{ props.dish.chinese_name }}</h2>
    <v-divider />
      <p v-if="props.dish.available_spicy_level.length !== 0">
        <b>Available Spicy Levels: </b> {{ get_spicy_level_descriptions(props.dish) }}
      </p>
      <p v-if="props.dish.religion_restriction.length !== 0">
        <b>Religion Restrictions: </b> {{ get_religion_descriptions(props.dish) }}
      </p>
      <b>Available flavors: </b>
      <v-select
              v-model="selectedFlavor"
              :items="flavorList"
              :disabled="!flavor_exists(props.dish)"
              />
    <template v-if="props.dish.Side_dish !== undefined">
      <b>Available dishes: </b>
      <v-list>
        <v-list-item v-for="dishes in props.dish.Side_dish">{{ dishes }}</v-list-item>
      </v-list>
    </template>
    <v-divider />
    <b>Available Spicy Levels: </b>
    <v-select
                     v-model="selectedSpicyLevel"
                     :items="spicyLevelList"
                     />
    <!-- <v-btn @click="addToOrderedDish">Add to Order</v-btn> -->
    <v-btn @click="orderDish">Order</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { dishes_ChuanXiang } from '@/store/canteens/canteen4/ChuanXiang_poach';
import { Dish, Flavor, spicy_eng, eng_spicy, spicy_chn } from '@/types/Dish';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Define the selected values for flavor and spicy level
const selectedFlavor = ref<string>('');

const selectedSpicyLevel = ref<string>('');

const router = useRouter();
const props = defineProps({
  dish: {
    type: Object as () => Dish,
    required: true,
  },
});

const flavorList = ref<string[]>([]);
if (props.dish.flavor !== undefined) {
  for (var flavor of props.dish.flavor) {
    flavorList.value.push(flavor.english_name);
  }
}

const spicyLevelList = ref<string[]>([]);
if (props.dish.available_spicy_level !== undefined) {
  for (var level of props.dish.available_spicy_level) {
    spicyLevelList.value.push(spicy_eng(level));
  }
}


const flavor_exists = (dish: Dish) => {
  if (dish.flavor === undefined) {
    return false;
  }
  return dish.flavor.length > 0;
};

const get_flavor_choices = (dish: Dish) => {
  let flavors = dish.flavor;
  let flavor_str = [] as string[];
  if (flavors === undefined) {
    return "Empty"
  }
  for (var flavor of (flavors as Flavor[])) {
    flavor_str.push(flavor.english_name);
  }
  return flavor_str.join(', ');
};

const get_spicy_level_descriptions = (dish: Dish) => {
  let spicy_levels = dish.available_spicy_level;
  let spicy_level_descriptions = [];
  if (spicy_levels.length === 0) {
    return 'Not An Answer';
  }
  if (spicy_levels.includes(0)) {
    spicy_level_descriptions.push('Not Spicy');
  }
  if (spicy_levels.includes(1)) {
    spicy_level_descriptions.push('Mild');
  }
  if (spicy_levels.includes(2)) {
    spicy_level_descriptions.push('Medium');
  }
  if (spicy_levels.includes(3)) {
    spicy_level_descriptions.push('Hot');
  }
  if (spicy_levels.includes(4)) {
    spicy_level_descriptions.push('Extra Hot');
  }
  return spicy_level_descriptions.join(', ');
};

// Define the options for spicy levels
const spicyLevels = [0, 1, 2, 3, 4];


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
  if(religions.includes(3)){
    religion_descriptions.push("No taboo")
  }
  return religion_descriptions.join(", ")
}

const orderDish = () => {
  const selected_spicy_level= eng_spicy(selectedSpicyLevel.value)
  const ch_selected_spicy_level = spicy_chn(selected_spicy_level)
  const selected_flavor = selectedFlavor.value
  var ch_selected_flavor = ""
  for (var flavor of props.dish.flavor) {
    if (flavor.english_name === selected_flavor) {
      ch_selected_flavor = flavor.chinese_name
    }
  }

  const ch_str_list = [ "我想要", props.dish.chinese_name, ch_selected_flavor, ch_selected_spicy_level ]

  const ch_str = ch_str_list.join(" ")
  router.push({ name: 'Order', params: { order_text: ch_str } })

}

</script>


<style scoped>
  h2 {
    color: grey;
    font-size: 1rem;
  }
</style>
