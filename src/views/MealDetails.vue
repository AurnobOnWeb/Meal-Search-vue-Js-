<template>
    <div class="max-w-[800px] mx-auto p-8">
       <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
       <img class="" :src="meal.strMealThumb" :alt="meal.strMeal">
       <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div class="">
            <strong class="font-bold">Category : </strong>{{ meal.strCategory }}
        </div>
        <div >
            <strong class="font-bold">Area : </strong>{{ meal.strArea }}
        </div>
        <div>
            <strong class="font-bold">Tags : </strong>{{ meal.strTags }}
        </div>
       </div>
       <div class="text-gray-500 mb-3 dark:text-gray-400" >
        {{ meal.strInstructions }}
       </div>
       <div class="grid grid-cols-1 sm:grid-cols-2 ">
        <div>
            <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul>
               <template v-for="(el,ind) of new Array(20)">
                <li v-if="meal[`strIngredient${ind+1}`]">
                  {{ ind +1 }}  {{ meal[`strIngredient${ind+1}`]}}</li>
               </template>
            </ul>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-2">Measures</h2>
            <ul>
               <template v-for="(el,ind) of new Array(20)">
                <li v-if="meal[`strMeasure${ind+1}`]">
                 -  {{ meal[`strMeasure${ind+1}`]}}</li>
               </template>
            </ul>
        </div>

        <div class="mt-4">
            <YoutubeButton :href="meal.strYoutube">
            Go to Youtube
            </YoutubeButton>

            <a :href="meal.strSource"  class=" ml-2 p-2 px-4 rounded border-2 border-indigo-600 hover:bg-indigo-500  hover:text-white transition-colors" target="_blank">
                Orinal Source
            </a>


        </div>
        </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {onMounted ,ref} from 'vue'
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
const route = useRoute();
const meal = ref({});
onMounted(()=>{
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) =>{
        meal.value =data.meals[0] || {}
    })
})
</script>
