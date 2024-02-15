import {API_KEY, BASE_URL} from "@/constants/index.js";

export class NewsInHome {
    static async getNewsInHome(searchInput, sorting) {
        const response = await fetch(`${BASE_URL}everything?q=${searchInput ? searchInput : "a"}&sortBy=${sorting}&language=en&pageSize=10&apiKey=${API_KEY}`);
        return (await response.json())
    }

    static async getMoreNewsInHome(searchInput, page, sorting) {
        const response = await fetch(`${BASE_URL}everything?page=${page}&q=${searchInput ? searchInput : "a"}&sortBy=${sorting}&language=en&pageSize=10&apiKey=${API_KEY}`);
        return (await response.json())
    }
}