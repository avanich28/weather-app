import './style.css';
import { importAll } from './helpers.js';
import * as model from './model.js';
import searchView from './views/searchView';

const images = importAll(
  require.context('./imgs', false, /\.(png|jpe?g|svg)$/)
);

const controlSearch = async function (data) {
  // Store data
  model.state.search.query = data;
  model.loadCurWeather();
};

fetch(
  'http://api.weatherapi.com/v1/current.json?key=0339d3d557a3447590e140611231208&q=London'
)
  .then(res => res.json())
  .then(data => console.log(data));

const init = function () {
  searchView.addHandlerSubmit(controlSearch);
};
init();
