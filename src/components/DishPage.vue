<template>
  <div>
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
    <template v-if="flavor_exists(props.dish)">
      <b>Available flavors: </b>
      <select v-model="selectedFlavor">
      <option value="">Select a flavor here</option>
      <option v-for="flavor in props.dish.flavor" :value="flavor">{{ flavor }}</option>
      </select>
    </template>
    <template v-if="props.dish.Side_dish !== undefined">
      <b>Available dishes: </b>
      <v-list>
        <v-list-item v-for="dishes in props.dish.Side_dish">{{ dishes }}</v-list-item>
      </v-list>
    </template>
    <v-divider />
    <b>Available Spicy Levels: </b>
    <select v-model="selectedSpicyLevel">
      <option value="">Select spicy level here</option>
      <option v-for="level in props.dish.available_spicy_level" :value="level">{{ level }}</option>
    </select>
    <!-- <v-btn @click="addToOrderedDish">Add to Order</v-btn> -->
  </div>
    <div>
      <h3>Ordered Dishes:</h3>
      <ul>
        <li v-for="dish in orderedDish" :key="dish">{{ dish }}</li>
      </ul>
    </div>
    <v-btn @click="addToOrderedDish">Add to Order</v-btn>
</template>

<script lang="ts" setup>
import { dishes_ChuanXiang } from '@/store/canteens/canteen4/ChuanXiang_poach';
import { Dish } from '@/types/Dish';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  dish: {
    type: Object as () => Dish,
    required: true,
  },
});

const flavor_exists = (dish: Dish) => {
  if (dish.flavor === undefined) {
    return false;
  }
  return dish.flavor.length > 0;
};

const get_flavor_choices = (dish: Dish) => {
  let flavors = dish.flavor as string[];
  return flavors.join(', ');
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

// Define the selected values for flavor and spicy level
let selectedFlavor = '';
let selectedSpicyLevel = Infinity;

// Define the ordered dishes
let orderedDish = ref<string[]>([]);

const addToOrderedDish = () => {
  if (selectedFlavor || selectedSpicyLevel) {
    let spicyLevelLabel = "";

    if (selectedSpicyLevel === 0) {
      spicyLevelLabel = "不辣的";
    } else if (selectedSpicyLevel === 1) {
      spicyLevelLabel = "微辣的";
    } else if (selectedSpicyLevel === 2) {
      spicyLevelLabel = "正常辣的";
    } else if (selectedSpicyLevel === 3) {
      spicyLevelLabel = "加辣的";
    } else if (selectedSpicyLevel === 4) {
      spicyLevelLabel = "变态辣的";
    }

    let flavorLabel = "常规";
    if (selectedFlavor === "Sweet"){
      flavorLabel = "甜口"
    } else if(selectedFlavor === "matcha"){
      flavorLabel = "抹茶"
    }

    const chineseOrder = `您好，我要一份${spicyLevelLabel}${flavorLabel}${props.dish.chinese_name}`;

    orderedDish.value.push(chineseOrder);
    selectedFlavor = "";
    selectedSpicyLevel = Infinity;

    const router = useRouter();
    router.push(`/order/${chineseOrder}`);
  }
};


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

</script>


<style scoped>
  h2 {
    color: grey;
    font-size: 1rem;
  }
</style>
