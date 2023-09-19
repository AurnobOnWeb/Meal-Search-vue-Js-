<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
    <div v-if="meals.length === 0" class="flex justify-center font-bold text-orange-500">
      There are no Meals
    </div>
  </template>
  
  <script>
  import { ref, defineProps } from "vue";
  import MealItem from "../components/MealItem.vue";
  
  export default {
    components: {
      MealItem,
    },
    props: {
      meals: {
        required: true,
        type: Array,
      },
    },
  };
  </script>
  