import axios from "axios";
import "dotenv/config";

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080/",
    headers: { "ngrok-skip-browser-warning": "true" },
});
