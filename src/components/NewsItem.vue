<template>
    <a :href="`${item.url}`">
        <div class="item">
            <div :class="item.urlToImage ? '' : 'image__bLock'">
                <img :class="item.urlToImage ? 'image' : 'not__image'" :src="item.urlToImage ? item.urlToImage : logo" alt="image for the news">
            </div>
            <div class="main">
                <div class="title-date">
                    <p class="title">{{ item.title }}</p>
                    <div class="date__block">
                        <p class="dateTime">{{ formattedDate }}</p>
                    </div>
                </div>
                <p class="author">Author: {{ item.author }}</p>
                <p class="description">{{ item.description }}</p>
            </div>
        </div>
    </a>
</template>

<script setup>
import logo from '../assets/img/logo.png';
import {computed} from "vue";
const props = defineProps({
    item: {
        type: [Object, null],
        required: true
    }
})

const formattedDate = computed(() => {
    const dateObj = new Date(props.item.publishedAt);
    return dateObj.toLocaleString();
})
</script>

<style lang="css" scoped>
.item {
    cursor: pointer;
    background-color: var(--white);
    box-shadow: 0 0 10px 4px var(--accent-hover);
    width: 1000px;
    min-height: 181px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 20px;
    transition: 0.3s;
}
.item:hover {
    transform: scale(1.02);
}

.image__bLock {
    width: 343px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 41px;
    border: 2px solid var(--accent);
    border-radius: 5px;
}

.image {
    height: 180px;
    border-radius: 7px;
}

.not__image {
    width: 260px;
    height: 44px;
}

.main {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.title-date {
    display: flex;
    gap: 15px;
}

.title {
    font-size: 20px;
    font-weight: 600;
    color: var(--black);
}

.date__block {
    margin-left: auto;
    margin-right: 0;
    height: 47px;
    width: 100px;
    border: 2px solid var(--text-gray)
}

.dateTime {
    color: var(--text-gray);
    text-align: center;
}

.author {
    color: var(--text-gray);
    font-size: 16px;
    font-weight: 500;
}

.description {
    color: var(--black);
}
</style>