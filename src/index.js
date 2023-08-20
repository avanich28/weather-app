import './style.css';
import * as model from './model.js';
import searchAndChangeTypeView from './views/searchAndChangeTypeView.js';
import temperatureView from './views/temperatureView.js';
import otherDetailsView from './views/otherDetailsView.js';
import hourlyView from './views/hourlyView.js';
import dailyView from './views/dailyView.js';
import dotsView from './views/dotsView.js';
import forecastsView from './views/forecastsView.js';

const controlSearch = async function (
  query,
  firstLoad = false,
  getLocation = true
) {
  try {
    [hourlyView, dotsView].forEach(view => view.hideBtns());

    if (!firstLoad || (firstLoad && !getLocation)) {
      // Loading
      [hourlyView, dailyView].forEach(el => el.renderSpinner());

      // Store query
      model.state.search.query = query;

      // Call API
      await model.loadCurWeather();
    }

    if (!firstLoad) {
      // Update today weather detail
      [temperatureView, otherDetailsView].forEach(view =>
        view.update(model.state.search.curWeather)
      );

      // Reset dot to first position
      dotsView.reset();
    } else if (firstLoad)
      [temperatureView, otherDetailsView].forEach(view =>
        view.render(model.state.search.curWeather)
      );

    // Render hourly/daily forecast & don't need index
    forecastsView.display(hourlyView, model.getPageHourly());
    forecastsView.display(dailyView, model.state.dailyForecast.results);

    [searchAndChangeTypeView, hourlyView, dotsView].forEach(view =>
      view.unhideBtns()
    );

    // Render hourly dots & need index
    forecastsView.display(dotsView, model.calcAllHourlyPages());
  } catch (err) {
    searchAndChangeTypeView.hideBtns();
    [searchAndChangeTypeView, hourlyView, dailyView].forEach(view =>
      view.renderErrorMsg(err.message)
    );
  }
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

const controlLoadLocationWeather = async function () {
  try {
    [temperatureView, hourlyView, dailyView].forEach(el => el.renderSpinner());

    // Initial location
    await model.loadLocationWeather();

    await controlSearch(null, true);
  } catch (err) {
    await controlSearch('thailand', true, false);
    alert(
      'Please allow the site to access to your location within browser settings in order to check the current weather at your position \n\n After the site is allowed, please reopen it again :D'
    );
  }
};

const init = function () {
  controlLoadLocationWeather();
  searchAndChangeTypeView.addHandlerSubmit(controlSearch);
  searchAndChangeTypeView.addHandlerClick(controlClickTempTypeBtn);
  hourlyView.addHandlerClickArrowLeft(controlClickArrowLeft);
  hourlyView.addHandlerClickArrowRight(controlClickArrowRight);
  dotsView.addHandlerClick(controlClickDot);
};
init();
