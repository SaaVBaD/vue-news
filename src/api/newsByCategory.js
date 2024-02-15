import {API_KEY, BASE_URL} from "@/constants/index.js";

export class NewsByCategory {
    static async getNewsByCategory(searchInput, category, sorting) {
        const response = await fetch(`${BASE_URL}top-headlines?category=${category}&q=${searchInput ? searchInput : "a"}&pageSize=10&apiKey=${API_KEY}`);
        return (await response.json())
    }

    static async getMoreNewsByCategory(searchInput, category, page, sorting) {
        const response = await fetch(`${BASE_URL}top-headlines?category=${category}&page=${page}&q=${searchInput ? searchInput : "a"}&pageSize=10&apiKey=${API_KEY}`);
        return (await response.json())
    }
}