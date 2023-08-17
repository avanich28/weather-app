import View from './View.js';

class HourlyView extends View {
  _parentElement = document.querySelector('.weather-hourly-list');

  _generateMarkUp() {
    return `
      <li class="hourly-item" data-index="${
        this._parentElement.children.length
      }">
        <p class="${typeof this._data.hour === 'string' ? 'bold' : ''}">${
      this._data.hour
    }</p>
        <div class="forecast-image">
          <iframe
            src="<%=require('./imgs/${this._data.code}_${
      this._data.isDay
    }.svg')%>"
            frameborder="0"
          ></iframe>
        </div>
        <p>${this._data.temp}&deg;C</p>
      </li>`;
  }
}

export default new HourlyView();
