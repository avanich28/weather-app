import { getJSON } from './helpers.js';

export const state = {
  search: {
    query: '',
    coord: {},
    curWeather: {},
  },
  hourlyForecast: {
    results: [],
    page: 1,
  },
  dailyForecast: {
    results: [],
    page: 1,
  },
  resultsPerPage: 4,
};

export const loadCurWeather = async function () {
  try {
    const coord = await getJSON(
      `https://geocode.xyz/${state.search.query}?json=1&auth=119992969915497e15787373x101695`
    );

    console.log(coord);

    const data = await getJSON(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coord.latt}&lon=${coord.longt}&appid=5b21c1a8d8f5a47a6ac39eb7b55ce1fa`
    );
    console.log(data);
  } catch (err) {
    throw err;
  }
};
