import {defineStore} from "pinia";
import {ref} from "vue";

export const useAppStore = defineStore('app', () => {
    const isSearchVisible = ref(false)
    const setSearchVisible = (state) => {
        isSearchVisible.value = state
    }

    const searchInput = ref('')
    const setSearchInput = (str) => {
        searchInput.value = str
    }

    return {
        isSearchVisible,
        setSearchVisible,

        searchInput,
        setSearchInput
    }
})