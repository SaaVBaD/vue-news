<template>
    <Transition name="slide-fade">
        <div class="items" v-if="news.articles">
            <news-item
                v-for="item in news.articles"
                :key="item.publishedAt"
                :item="item"
            />
            <div
                v-intersection="loadMoreNews"
                class="observer">

            </div>
        </div>
        <div class="items" v-else>
            <news-item-skeleton v-for="idx in 10" :key="idx" />
        </div>
    </Transition>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import NewsItemSkeleton from "@/components/NewsItemSkeleton.vue";
import {onMounted, ref, watch} from "vue";
import {useAppStore} from "@/store/app.js";
import {NewsByCategory} from "@/api/newsByCategory.js";
import {useRoute} from "vue-router";

const route = useRoute()
const news = ref([])
onMounted(async () => {
    news.value = await NewsByCategory.getNewsByCategory(appStore.searchInput, route.params.category);
})

const appStore = useAppStore()
watch(
    () => appStore.searchInput || route.path,
    async () => {
        news.value = await NewsByCategory.getNewsByCategory(appStore.searchInput, route.params.category);
    }
)

let page = 1
async function loadMoreNews() {
    page += 1;
    const data = await NewsByCategory.getMoreNewsByCategory(appStore.searchInput, route.params.category, page);
    news.value.articles = news.value.articles.concat(data.articles);
}
</script>

<style lang="css" scoped>
.items {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    transition: 1s;
}
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.observer {
    margin-top: -75px;
    height: 30px;
    background: inherit;
}
</style>