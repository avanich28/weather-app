import './style.css';
import { importAll } from './helpers.js';
import * as model from './model.js';
import searchView from './views/searchView';

const images = importAll(
  require.context('./imgs', false, /\.(png|jpe?g|svg)$/)
);

const controlSearch = async function (query) {
  // Store query
  model.state.search.query = query;

  // Call API
  await model.loadCurWeather();

  // Update today detail
};

const init = function () {
  searchView.addHandlerSubmit(controlSearch);
};
init();

// fetch(
//   'http://api.weatherapi.com/v1/forecast.json?key=0339d3d557a3447590e140611231208&q=London&days=1'
// )
//   .then(res => res.json())
//   .then(data => console.log(data));
