<template>
    <div class="flex p-8 flex-col ">
        <div class="items-center justify-center">
            <input @change="searchMeals" 
            v-model="keyword" 
            type="text" 
            class="rounded border-2 border-orange-500 w-full"
                placeholder="Search for meals">
        </div>
        <div class="mt-7 text-xl flex flex-wrap justify-center gap-3 px-8 mb-6">
            <RouterLink
             :to="{ name: 'byLetter', params: { letter } }"
              v-for="letter of letters"
               :key="letter"  
               class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
                {{ letter }}
            </RouterLink>
        </div>
    </div> 
    <Meals :meals="meals"/>
</template>

<script setup>

import { computed } from "@vue/reactivity";
import { onMounted, ref } from 'vue';
import store from '../store';
import axiosclient from '../axiosClient.js';
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const letters = 'ABCDEFGHIJKLMNOPQRSTWXYZ'.split("");
const route =useRoute();
const keyword = ref("");

const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if(keyword.value){
        store.dispatch("searchMeals", keyword.value);
    }else{
        store.commit("setSearchedMeals",[]);
    }
}
onMounted(()=> {
   keyword.value = route.params.name
   if(keyword.value){
    searchMeals()
   }
})
</script>

<style  scoped></style>