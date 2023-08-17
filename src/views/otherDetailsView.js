import View from './View.js';

class OtherDetailsView extends View {
  _parentElement = document.querySelector('.other-details');

  _generateMarkUp() {
    return `
      <div class="humidity">
        <img src="${this._findImage(false, 'humidity')}" alt="humidity" />
        <div>
          <p>${this._data.humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="wind-speed">
        <img src="${this._findImage(false, 'wind')}" alt="wind" />
        <div>
          <p>${this._data.windSpeed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
      <div class="chance-of-rain">
        <img src="${this._findImage(false, 'rain')}" alt="rain" />
        <div>
          <p>${this._data.chanceOfRain}%</p>
          <p>Chance of Rain</p>
        </div>
      </div>
      <div class="feel-like">
        <img
          src="${this._findImage(false, 'thermometer')}"
          alt="thermometer"
        />
        <div>
          <p>${this._data.feelsLike}&deg;C</p>
          <p>Feels Like</p>
        </div>
      </div>`;
  }
}

export default new OtherDetailsView();
