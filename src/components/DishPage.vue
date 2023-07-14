<template>
  <v-container>
      <v-img :src="props.dish.cover_picture" :alt="props.dish.picture_title" />
      <h1>{{ props.dish.name }}</h1>
      <h2>{{ props.dish.chinese_name }}</h2>
    <v-divider />
    <p v-if="props.dish.introduction !== undefined">
      <b> Introduction: </b>{{ props.dish.introduction }}
    </p>
      <p v-if="props.dish.available_spicy_level.length !== 0">
        <b>Available Spicy Levels: </b> {{ get_spicy_level_descriptions(props.dish) }}
      </p>
      <p v-if="props.dish.religion_restriction.length !== 0">
        <b>Religion Restrictions: </b> {{ get_religion_descriptions(props.dish) }}
      </p>
      <template v-if="props.dish.flavor !== undefined">
      <b>Available flavors: </b>
      <v-select
              v-model="selectedFlavor"
              :items="flavorList"
              :disabled="!flavor_exists(props.dish)"
              />
       </template>
    <template v-if="props.dish.Side_dish !== undefined">
      <b>Available dishes: </b>
      <v-select
              v-model="selectedDish"
              :items="dishList"
              :disabled="!dish_exists(props.dish)"
              />
    </template>
    <v-divider />
    <template v-if="props.dish.available_spicy_level.length > 0">
    <b>Available Spicy Levels: </b>
    <v-select
                     v-model="selectedSpicyLevel"
                     :items="spicyLevelList"
                     />
    </template>
    <!-- <v-btn @click="addToOrderedDish">Add to Order</v-btn> -->
    <v-btn @click="orderDish">Order</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { Dish, Flavor, Side_Dish, eng_spicy, spicy_chn, spicy_eng } from '@/types/Dish';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Define the selected values for flavor and spicy level
const selectedFlavor = ref<string>('');
const selectedDish = ref<string>('');

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

const dishList = ref<string[]>([]);
  if (props.dish.Side_dish !== undefined) {
  for (var dish of props.dish.Side_dish) {
    dishList.value.push(dish.english_name);
  }
}


const flavor_exists = (dish: Dish) => {
  if (dish.flavor === undefined) {
    return false;
  }
  return dish.flavor.length > 0;
};

const dish_exists = (dish: Dish) => {
  if (dish.Side_dish === undefined) {
    return false;
  }
  return dish.Side_dish.length > 0;
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
  var ch_selected_spicy_level = spicy_chn(selected_spicy_level)
  if (selectedSpicyLevel.value === "") {
    ch_selected_spicy_level = ""
  }
  const selected_flavor = selectedFlavor.value
  const selected_dish = selectedDish.value
  var ch_selected_flavor = ""
  var ch_selected_dish = ""

  var flavor_list : Flavor[] = []
  if (props.dish.flavor !== undefined) {
    flavor_list = props.dish.flavor
  }

  for (var flavor of flavor_list) {
    if (flavor.english_name === selected_flavor) {
      ch_selected_flavor = flavor.chinese_name
    }
  }

  var dish_list : Side_Dish[] = []
  if (props.dish.Side_dish !== undefined) {
    dish_list = props.dish.Side_dish
  }

  for (var dish of dish_list) {
    if (dish.english_name === selected_dish) {
      ch_selected_dish = dish.chinese_name
    }
  }

  const ch_str_list = [ "我想要", props.dish.chinese_name, ch_selected_flavor,ch_selected_dish ,ch_selected_spicy_level ]

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
