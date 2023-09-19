<template>
    <div>
        <div class="p-8 pb-0">
            <h1 class="text-4xl font-bold mb-8 text-orange-500">Meals by Letter</h1>
        </div>
        <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
            <RouterLink
             :to="{ name: 'byLetter', params: { letter } }"
              v-for="letter of letters"
               :key="letter"  
               class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
                {{ letter }}
            </RouterLink>
        </div>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from '../store';
import Meals from "../components/Meals.vue";
const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTWXYZ'.split("");
const meals = computed(() => store.state.MealsByletter);

watch(route, () => {
    store.dispatch('searchMealsByletter', route.params.letter)
})
onMounted(() => {
    store.dispatch('searchMealsByletter', route.params.letter)
})
</script>
