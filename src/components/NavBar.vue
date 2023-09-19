<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <RouterLink :to="{ name: 'home' }" class=" inline-flex items-center px-5 text-orange-500 font-bold">
            Home
        </RouterLink>
        <div class="flex items-center gap-1">
            <RouterLink :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full transition-colors text-orange-500 font-bold hover:bg-orange-500  hover:text-white" >
                Search Meals
            </RouterLink>
            <RouterLink :to="{ name: 'byLetter' }"
                class=" inline-flex items-center px-2 h-full transition-colors text-orange-500 font-bold hover:bg-orange-500  hover:text-white">
                Meals By Letter
            </RouterLink>
            <RouterLink :to="{ name: 'ingredients' }"
                class="mr-3 inline-flex items-center px-2 h-full transition-colors  text-orange-500 font-bold hover:bg-orange-500 hover:text-white">
                Meals by Ingredients
            </RouterLink>
        </div>
    </header>
</template>

<script setup>

</script>

