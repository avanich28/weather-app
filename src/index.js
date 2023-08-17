import './style.css';
import { importAll } from './helpers.js';
import * as model from './model.js';
import searchView from './views/searchView.js';
import temperatureView from './views/temperatureView.js';
import otherDetailsView from './views/otherDetailsView.js';
import hourlyView from './views/hourlyView.js';
import dailyView from './views/dailyView.js';

const images = importAll(
  require.context('./imgs', false, /\.(png|jpe?g|svg)$/)
);

const controlSearch = async function (query) {
  // Store query
  model.state.search.query = query;

  // Call API
  await model.loadCurWeather();

  // Update today weather detail
  [temperatureView, otherDetailsView].forEach(view =>
    view.update(model.state.search.curWeather)
  );

  // Clear forecast
  [hourlyView, dailyView].forEach(view => view.clear());

  console.log(model.state);

  // Render hourly & daily forecast
  model.getPageHourly().forEach(data => hourlyView.render(data));
  model.state.dailyForecast.results.forEach(data => dailyView.render(data));
};

const init = function () {
  searchView.addHandlerSubmit(controlSearch);
};
init();

fetch(
  'http://api.weatherapi.com/v1/forecast.json?key=0339d3d557a3447590e140611231208&q=London&days=1'
)
  .then(res => res.json())
  .then(data => console.log(data));
