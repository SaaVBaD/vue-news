<template>
    <header class="header">
        <router-link to="/">
            <p class="logo">VUE NEWS</p>
        </router-link>
        <nav class="navigation">
            <router-link v-for="link in categories" :key="link.id" :to="`/category/${link.display_name}`">
                <p class="category">{{ link.display_name }}</p>
            </router-link>
        </nav>
        <img @click="openSearchInput" class="search" src="../assets/img/search.svg" alt="search" >
    </header>
</template>

<script setup>
import { useAppStore } from '@/store/app.js';
import {categories} from '../api/categories.js';

const appStore = useAppStore()
const openSearchInput = () => {
    appStore.setSearchVisible(true)
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 80px;
    background-color: var(--white);
    position: fixed;
    z-index: 1;
    padding: 0 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: 'Black Ops One', sans-serif;
    color: var(--accent);
    font-size: 45px;
    cursor: pointer;
    transition: 0.3s;
    white-space: nowrap;
}
.logo:hover {
    transform: scale(1.05);
}

.navigation {
    display: flex;
    gap: 25px;
}

.category {
    cursor: pointer;
    background-color: var(--white);
    color: var(--accent);
    font-size: 18px;
    font-weight: 600;
}
.category:hover {
    transform: scale(1.02);
}

.search {
    cursor: pointer;
    transition: 0.2s;
}
.search:hover {
    transform: scale(1.1);
}

@media (max-width: 1700px) {
    .header {
        padding: 0 100px;
    }
}
</style>