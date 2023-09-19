<template>
   <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
            <RouterLink :to="{name:'mealDetails' ,params:{id:meal.idMeal}}">
            <img class="rounded-t-xl h-[250px] w-full object cover " :src="meal.strMealThumb" :alt="strMeal">
            </RouterLink>
            <div class="p-3 ">
             <h3 class="font-bold  ">{{ meal.strMeal }}</h3>
               <p class="mb-4 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="mt-2 mb-2" >
                    <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                </div>
            </div>
        </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue'
const {meal} = defineProps ({
    meal: {
        required: true,
        type: Object
    }
})
</script>

