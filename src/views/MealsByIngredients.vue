<template>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from '../store';
import Meals from '../components/Meals.vue'

const route =useRoute();
const meals = computed(() => store.state.MealsByIngredient);



onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredientsName)
})
</script>
