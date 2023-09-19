<template>
  <div class="p-8">
    <h1 class="font-bold m-4 text-4xl">Ingredients</h1>
    <input
      v-model="keyword"
      type="text"
      class="mb-3 rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />
    <router-link
      :to="{ name: 'byIngredients', params: { ingredientsName: ing.strIngredient } }"
      v-for="ing in filteredIngredients"
      :key="ing.idIngredient"
      class="bg-white rounded block p-3 mb-3 shadow"
    >
      <h3 class="font-bold text-2xl mb-2">{{ ing.strIngredient }}</h3>
      <p>{{ ing.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import { computed } from "vue";

const route = useRoute();
const ingredients = ref([]);
const keyword = ref("");

const filteredIngredients = computed(() => {
  return ingredients.value.filter((ing) => {
    return (
      ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
     );
  });
});

onMounted(async () => {
  try {
    const response = await axiosClient.get("list.php?i=list");
    ingredients.value = response.data.meals;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
  }
});
</script>
