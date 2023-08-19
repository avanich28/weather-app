import View from './View.js';

class DailyView extends View {
  _parentElement = document.querySelector('.weather-daily-list');

  _generateMarkUp() {
    return `
      <li class="daily-item">
        <p>${this._data.day}</p>
        <div class="forecast-image">
          <iframe
            src="${this._findImage()}"
            frameborder="0"
          ></iframe>
        </div>
        <p>${this._data.temp}&deg;${this._data.tempType}</p>
      </li>`;
  }
}

export default new DailyView();
