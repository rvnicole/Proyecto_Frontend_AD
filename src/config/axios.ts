import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_RAG,
    timeout: 240000,
});