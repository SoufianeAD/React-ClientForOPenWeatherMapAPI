import {FETCH_WEATHER} from "./Types";
import OpenWeatherMapAPI, {API_KEY} from "../apis/OpenWeatherMapAPI";

export const fetchWeather = (city) => async (dispatch) => {
    const { data } = await OpenWeatherMapAPI.get(`forecast?appid=${API_KEY}&q=${city},us`);
    dispatch({type: FETCH_WEATHER, payload: data});
}