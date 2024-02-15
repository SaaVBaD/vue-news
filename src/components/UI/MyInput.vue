<template>
    <Transition name="bounce">
        <div class="input__block">
            <input
                v-model="searchInput"
                @input="setSearchInput"
                type="text"
                class="input"
                placeholder="Поиск новостей"
            >
            <img @click="closeSearchInput" class="close" src="../../assets/img/close.svg" alt="close">
        </div>
    </Transition>
</template>

<script setup>
import { useAppStore } from '@/store/app.js'
import {computed} from "vue";

const appStore = useAppStore()
const closeSearchInput = () => {
    appStore.setSearchVisible(false)
    appStore.searchInput = ""
}

const searchInput = computed(() => appStore.searchInput)
const setSearchInput = (searchInput) => {
    appStore.setSearchInput(searchInput.target.value)
}
</script>

<style lang="css" scoped>

.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fromTop {
    0%{
        margin-top: 100px;
    }
    100% {
        margin-top: 125px;
    }
}

.input__block {
    position: relative;
    animation: fromTop 0.7s forwards;
    display: flex;
    justify-content: center;
}

.input {
    cursor: pointer;
    position: fixed;
    background-color: var(--white);
    border: none;
    border-radius: 10px;
    height: 60px;
    width: 700px;
    box-shadow: 0 0 10px 3px var(--accent-hover);
    padding: 5px 15px;
    transition: 0.3s;
    outline: none;

    font-size: 20px;
    font-weight: 500;
    color: var(--accent);
}
.input:focus-visible {
    transform: scale(1.1);
    cursor: text;
}
.input:focus-visible + .close {
    left: 330px;
}

.close {
    position: absolute;
    cursor: pointer;
    top: 12px;
    left: 300px;
    transition: 0.3s;
}
.close:hover {
    transform: scale(1.05);
}
</style>