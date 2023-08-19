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
  if (!firstLoad) {
    // Loading
    [hourlyView, dailyView].forEach(el => el.renderSpinner());

    // Store query
    model.state.search.query = query;

    // Call API
    await model.loadCurWeather();

    // Update today weather detail
    [temperatureView, otherDetailsView].forEach(view =>
      view.update(model.state.search.curWeather)
    );

    // Reset dot to first position
    dotsView.reset();
  }

  // Render hourly/daily forecast & don't need index
  forecastsView.display(hourlyView, model.getPageHourly());
  forecastsView.display(dailyView, model.state.dailyForecast.results);

  // Render hourly dots & need index
  forecastsView.display(dotsView, model.calcAllHourlyPages());
};

const controlClickArrowLeft = function () {
  forecastsView.display(
    hourlyView,
    model.getPageHourly(--model.state.hourlyForecast.page)
  );

  dotsView.switchDot(model.state.hourlyForecast.page);
};

const controlClickArrowRight = function () {
  forecastsView.display(
    hourlyView,
    model.getPageHourly(++model.state.hourlyForecast.page)
  );

  dotsView.switchDot(model.state.hourlyForecast.page);
};

const controlClickDot = function (index) {
  forecastsView.display(hourlyView, model.getPageHourly(index + 1));
};

const controlClickTempTypeBtn = function (type) {
  // Calculate temp
  model.convertTemp(type);

  // Update
  [temperatureView, otherDetailsView].forEach(view =>
    view.update(model.state.search.curWeather)
  );

  [hourlyView, dailyView].forEach((view, i) => {
    const data =
      i === 0
        ? model.getPageHourly(model.state.hourlyForecast.page)
        : model.state.dailyForecast.results;
    forecastsView.display(view, data, true);
  });
};

const init = async function () {
  try {
    [temperatureView, hourlyView, dailyView].forEach(el => el.renderSpinner());

    // Initial location
    await model.loadLocationWeather();
    [temperatureView, otherDetailsView].forEach(view =>
      view.render(model.state.search.curWeather)
    );
    await controlSearch(null, true);

    searchAndChangeTypeView.addHandlerSubmit(controlSearch);
    searchAndChangeTypeView.addHandlerClick(controlClickTempTypeBtn);
    hourlyView.addHandlerClickArrowLeft(controlClickArrowLeft);
    hourlyView.addHandlerClickArrowRight(controlClickArrowRight);
    dotsView.addHandlerClick(controlClickDot);
  } catch (err) {
    console.log(err);
  }
};
init();
