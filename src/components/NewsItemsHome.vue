<template>
    <div class="items" v-if="news">
        <select v-model="sorting" class="select">
            <option value="publishedAt" >Published at</option>
            <option value="popularity">Popularity</option>
            <option value="relevancy">Relevancy</option>
        </select>
        <transition-group name="list">
            <news-item
                v-for="item in news.articles"
                :key="item.publishedAt"
                :item="item"
            />
        </transition-group>
        <div
            v-intersection="loadMoreNews"
            class="observer">

        </div>
    </div>
    <div class="items" v-else>
        <news-item-skeleton v-for="idx in 10" :key="idx" />
    </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import {onMounted, ref, watch} from "vue";
import {NewsInHome} from "@/api/newsInHome.js";
import {useAppStore} from "@/store/app.js";
import NewsItemSkeleton from "@/components/NewsItemSkeleton.vue";

const sorting = ref("publishedAt")
const news = ref(null)
onMounted(async () => {
    news.value = await NewsInHome.getNewsInHome(appStore.searchInput, sorting.value);
})

const appStore = useAppStore()
watch(
    () => appStore.searchInput || sorting.value,
    async () => {
        news.value = await NewsInHome.getNewsInHome(appStore.searchInput, sorting.value);
    }
)

let page = 1
async function loadMoreNews() {
    page += 1;
    const data = await NewsInHome.getMoreNewsInHome(appStore.searchInput, page, sorting.value);
    news.value.articles = news.value.articles.concat(data.articles);
}
</script>

<style lang="css" scoped>
.items {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.select {
    cursor: pointer;
    width: 800px;
    margin-inline: auto;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding-left: 20px;
    background-color: var(--white);
    appearance: none;

    font-size: 18px;
    font-weight: 600;
}
.select:not([multiple]) {
    background-repeat: no-repeat;
    background-position: calc(100% - 1.1em);
    background-image: url("../assets/img/SelectArrow.svg");
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

.observer {
    margin-top: -75px;
    height: 30px;
    background: inherit;
}
</style>