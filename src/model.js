import { RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  search: {
    query: '',
    curWeather: {},
  },
  hourlyForecast: {
    results: [],
    page: 1,
  },
  dailyForecast: {
    results: [],
  },
  type: 0, // 0 = celsius, 1 = fahrenheit
  resultsPerPage: RES_PER_PAGE,
};

const convertDateAndTime = function (date) {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-GB', options)
    .format(date)
    .replace(' at ', ' | ');
};

const getHourNum = function (date) {
  return new Date(date).getHours();
};

const createCurWeatherObj = function (data) {
  const { current, forecast, location } = data;
  const forecastDay = forecast.forecastday[0];

  return {
    city: location.name,
    country: location.country,
    localTime: convertDateAndTime(new Date(location.localtime)),
    code: current.condition.code,
    isDay: current.is_day,
    temp: current.temp_c,
    description: current.condition.text,
    maxTemp: forecastDay.day.maxtemp_c,
    minTemp: forecastDay.day.mintemp_c,
    humidity: current.humidity,
    windSpeed: current.wind_kph,
    chanceOfRain:
      forecastDay.hour[getHourNum(location.localtime)].chance_of_rain,
    feelsLike: current.feelslike_c,
  };
};

const createHourlyObj = function (hourData, curHour) {
  const hourNum = getHourNum(hourData.time);
  return {
    hour: hourNum === curHour ? 'Now' : hourNum,
    temp: hourData.temp_c,
    code: hourData.condition.code,
    isDay: hourData.is_day,
  };
};

const createDailyObj = function (dayData) {
  return {
    day: convertDateAndTime(new Date(dayData.date))
      .split(' ')[0]
      .replace(',', ''),
    temp: dayData.day.avgtemp_c,
    code: dayData.day.condition.code,
    isDay: 1,
  };
};

const storeHourlyForecast = function (data) {
  const { forecast, location } = data;
  // Use only 2 days
  const days = forecast.forecastday.slice(0, 2);

  // Store only 24 hours
  const index = getHourNum(location.localtime);
  const hours = days[0].hour.slice(index).concat(days[1].hour.slice(0, index));

  // Clear
  state.hourlyForecast.results = [];

  hours.forEach(hour => {
    const obj = createHourlyObj(hour, index);
    state.hourlyForecast.results.push(obj);
  });
};

const storeDailyForecast = function (data) {
  const { forecast } = data;
  // API is free only 2 days
  const days = forecast.forecastday.slice(1);

  // Clear
  state.dailyForecast.results = [];

  days.forEach(day => {
    const obj = createDailyObj(day);
    state.dailyForecast.results.push(obj);
  });
};

export const loadCurWeather = async function () {
  try {
    const data = await getJSON(
      `http://api.weatherapi.com/v1/forecast.json?key=0339d3d557a3447590e140611231208&q=${state.search.query}&days=3`
    );

    state.search.curWeather = createCurWeatherObj(data);
    storeHourlyForecast(data);
    storeDailyForecast(data);

    state.hourlyForecast.page = 1;
  } catch (err) {
    throw err;
  }
};

export const getPageHourly = function (page = 1) {
  state.hourlyForecast.page = page;

  const start = state.resultsPerPage * (page - 1);
  const end = page * state.resultsPerPage + 1;

  return state.hourlyForecast.results.slice(start, end);
};
