

import axios from 'axios';

export const getWeatherDetail = (code)=>{return axios.get('http://t.weather.sojson.com/api/weather/city/'+code)};
export const getCityList = ()=>{return axios.get('http://cdn.sojson.com/_city.json')};
export const testApi = ()=>{return axios.get('http://localhost:3000/findPeople/findPeople?id=12')};

export const userLogin = (params)=>{return axios.post('http://localhost:3000/users/login',params)}

export const toTalk = ()=>{return axios.get('http://localhost:3000/users/talk')}