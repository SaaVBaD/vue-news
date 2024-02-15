<template>
    <div class="page">
        <header-component />
        <Transition name="fade">
            <my-input v-if="isSearchVisible" />
        </Transition>
        <news-items-home />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import MyInput from "@/components/UI/MyInput.vue";
import {useAppStore} from "@/store/app.js";
import {computed} from "vue";
import NewsItemsHome from "@/components/NewsItemsHome.vue";

const appStore = useAppStore()
const isSearchVisible = computed(() => appStore.isSearchVisible)
</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>