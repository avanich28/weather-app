import { RES_PER_PAGE } from './config.js';
import { getJSON, calcFahrenheit, calcCelsius } from './helpers.js';

export const state = {
  curPosition: '',
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

const getTempSymbol = function () {
  return state.type === 0 ? 'C' : 'F';
};

const getTemp = function (temp) {
  if (state.type === 0) return temp;
  else return calcFahrenheit(temp);
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
    temp: getTemp(current.temp_c),
    description: current.condition.text,
    maxTemp: getTemp(forecastDay.day.maxtemp_c),
    minTemp: getTemp(forecastDay.day.mintemp_c),
    humidity: current.humidity,
    windSpeed: current.wind_kph,
    chanceOfRain:
      forecastDay.hour[getHourNum(location.localtime)].chance_of_rain,
    feelsLike: getTemp(current.feelslike_c),
    tempType: getTempSymbol(),
  };
};

const createHourlyObj = function (hourData, curHour) {
  const hourNum = getHourNum(hourData.time);
  return {
    hour: hourNum === curHour ? 'Now' : hourNum,
    temp: getTemp(hourData.temp_c),
    code: hourData.condition.code,
    isDay: hourData.is_day,
    tempType: getTempSymbol(),
  };
};

const createDailyObj = function (dayData) {
  return {
    day: convertDateAndTime(new Date(dayData.date))
      .split(' ')[0]
      .replace(',', ''),
    temp: getTemp(dayData.day.avgtemp_c),
    code: dayData.day.condition.code,
    isDay: 1,
    tempType: getTempSymbol(),
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

export const calcAllHourlyPages = function () {
  return Math.ceil(state.hourlyForecast.results.length / state.resultsPerPage);
};

export const getPageHourly = function (page = 1) {
  const allPages = calcAllHourlyPages();
  if (page > allPages) page = 1;
  if (page < 1) page = allPages;
  state.hourlyForecast.page = page;

  const start = state.resultsPerPage * (page - 1);
  const end = page * state.resultsPerPage;

  return state.hourlyForecast.results.slice(start, end);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const loadLocation = async function () {
  try {
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    console.log(`https://www.google.co.th/maps/@${latitude},${longitude}`); // FIXME

    const data = await getJSON(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );

    state.curPosition = data.locality;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const convertTemp = function (type) {
  state.type = type;
  const calcTemp = type === 0 ? calcCelsius : calcFahrenheit;

  // Today
  const { curWeather } = state.search;

  const allProps = ['temp', 'maxTemp', 'minTemp', 'feelsLike'];
  allProps.forEach(prop => (curWeather[prop] = calcTemp(curWeather[prop])));
  curWeather.tempType = getTempSymbol();

  // Hourly & Daily
  [state.hourlyForecast, state.dailyForecast].forEach(obj => {
    obj.results.forEach(data => {
      data.temp = calcTemp(data.temp);
      data.tempType = getTempSymbol();
    });
  });
};
