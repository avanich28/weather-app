import './style.css';
import * as model from './model.js';
import searchAndChangeTypeView from './views/searchAndChangeTypeView.js';
import temperatureView from './views/temperatureView.js';
import otherDetailsView from './views/otherDetailsView.js';
import hourlyView from './views/hourlyView.js';
import dailyView from './views/dailyView.js';
import dotsView from './views/dotsView.js';

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
  [hourlyView, dailyView, dotsView].forEach(view => view.clear());

  // Render hourly & daily forecast
  model.getPageHourly().forEach(data => hourlyView.render(data));
  model.state.dailyForecast.results.forEach(data => dailyView.render(data));

  // Render hourly dots
  for (let i = 0; i < model.calcAllHourlyPages(); i++) {
    console.log();
    dotsView.render(true);
  }
};

const controlClickArrowLeft = function () {
  hourlyView.clear();
  model
    .getPageHourly(--model.state.hourlyForecast.page)
    .forEach(data => hourlyView.render(data));
};

const controlClickArrowRight = function () {
  hourlyView.clear();
  model
    .getPageHourly(++model.state.hourlyForecast.page)
    .forEach(data => hourlyView.render(data));
};

const controlClickDot = function (index) {
  hourlyView.clear();
  model.getPageHourly(index + 1).forEach(data => hourlyView.render(data));
};

const init = function () {
  searchAndChangeTypeView.addHandlerSubmit(controlSearch);
  hourlyView.addHandlerClickArrowLeft(controlClickArrowLeft);
  hourlyView.addHandlerClickArrowRight(controlClickArrowRight);
  dotsView.addHandlerClick(controlClickDot);
};
init();
