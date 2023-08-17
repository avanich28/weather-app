import './style.css';
import * as model from './model.js';
import searchView from './views/searchView.js';
import temperatureView from './views/temperatureView.js';
import otherDetailsView from './views/otherDetailsView.js';
import hourlyView from './views/hourlyView.js';
import dailyView from './views/dailyView.js';

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
