import './style.css';
import * as model from './model.js';
import searchAndChangeTypeView from './views/searchAndChangeTypeView.js';
import temperatureView from './views/temperatureView.js';
import otherDetailsView from './views/otherDetailsView.js';
import hourlyView from './views/hourlyView.js';
import dailyView from './views/dailyView.js';
import dotsView from './views/dotsView.js';
import forecastsView from './views/forecastsView.js';

const controlSearch = async function (query, firstLoad = false) {
  // Store query
  model.state.search.query = query;

  // Call API
  await model.loadCurWeather();

  // Update today weather detail
  if (firstLoad)
    [temperatureView, otherDetailsView].forEach(view =>
      view.render(model.state.search.curWeather)
    );
  else
    [temperatureView, otherDetailsView].forEach(view =>
      view.update(model.state.search.curWeather)
    );

  // Clear forecast
  [hourlyView, dailyView, dotsView].forEach(view => view.clear());

  // Render hourly & daily forecast & don't need index
  forecastsView.display(hourlyView, model.getPageHourly());
  forecastsView.display(dailyView, model.state.dailyForecast.results);

  // Render hourly dots & need index
  for (let i = 0; i < model.calcAllHourlyPages(); i++) dotsView.render(true);
  dotsView.resetDot();
};

const controlClickArrowLeft = function () {
  hourlyView.clear();
  forecastsView.display(
    hourlyView,
    model.getPageHourly(--model.state.hourlyForecast.page)
  );

  dotsView.switchDot(model.state.hourlyForecast.page);
};

const controlClickArrowRight = function () {
  hourlyView.clear();
  forecastsView.display(
    hourlyView,
    model.getPageHourly(++model.state.hourlyForecast.page)
  );

  dotsView.switchDot(model.state.hourlyForecast.page);
};

const controlClickDot = function (index) {
  hourlyView.clear();
  forecastsView.display(hourlyView, model.getPageHourly(index + 1));
};

const init = async function () {
  try {
    await model.loadLocation();
    controlSearch(model.state.curPosition, true);
    searchAndChangeTypeView.addHandlerSubmit(controlSearch);
    hourlyView.addHandlerClickArrowLeft(controlClickArrowLeft);
    hourlyView.addHandlerClickArrowRight(controlClickArrowRight);
    dotsView.addHandlerClick(controlClickDot);
  } catch (err) {
    console.log(err);
  }
};
init();
