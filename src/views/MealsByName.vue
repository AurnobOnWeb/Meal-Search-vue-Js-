<template>
    <div class="p-8 pb-0">
        <div class="items-center justify-center">
            <input @change="searchMeals" 
            v-model="keyword" 
            type="text" 
            class="rounded border-2 border-orange-500 w-full"
                placeholder="Search for meals">
        </div>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";
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
 
