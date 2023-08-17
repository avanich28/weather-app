import View from './View.js';

class DailyView extends View {
  _parentElement = document.querySelector('.weather-daily-list');

  _generateMarkUp() {
    return `
      <li class="daily-item" data-index="${this._parentElement.children.length}">
        <p>${this._data.day}</p>
        <div class="forecast-image">
          <iframe
            src="<%=require('./imgs/${this._data.code}_${this._data.isDay}.svg')%>"
            frameborder="0"
          ></iframe>
        </div>
        <p>${this._data.temp}&deg;C</p>
      </li>`;
  }
}

export default new DailyView();
