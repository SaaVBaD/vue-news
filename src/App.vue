<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
</template>

<style>
* {
    font-family: 'Space Grotesk', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    --white: #ffffff;
    --accent: #2465ec;
    --item-bg: #cacaca;
    --accent-hover: #b9b9b9;
    --text-gray: #6a6a6a;
    --black: #000000;
}

body {

    background-color: var(--accent);
}

a {
    text-decoration: none;
}
</style>
