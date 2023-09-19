<template>

       <NavBar/>
       <main>
        <div class="max-w-[1200px] mx-auto"> 
            <RouterView />
        </div>
       
       </main>

</template>

<script setup>
import NavBar from './NavBar.vue';

import { RouterView } from 'vue-router';

</script>

