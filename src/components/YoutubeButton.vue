<template>
       <a :href="href"  class="p-2 px-4 rounded border-2 border-orange-500 hover:bg-orange-500  hover:text-white transition-colors" target="_blank">
        <slot></slot>
        </a>

</template>

<script setup>
    const props = defineProps({
        href: String // Corrected data type to String
    })
</script>