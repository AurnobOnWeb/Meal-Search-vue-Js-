import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import HomeComponent from '../views/HomeComponent.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeComponent
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/ingredients/',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredients/:ingredientsName',
                name: 'byIngredients',
                component: MealsByIngredients
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    }, {
      
       
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
