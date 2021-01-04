import axios from "axios";

export const API_KEY = '9e3158e8c55521005017a83d03c74cbb';

export default axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5`
});