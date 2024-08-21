import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_URL;

export default axios.create({
    baseURL: apiUrl || "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
    },
});
