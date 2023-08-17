import View from './View.js';

class TemperatureView extends View {
  _parentElement = document.querySelector('.temperature-detail');

  _generateMarkUp() {
    return `
    <div>
      <i class="bi bi-geo-alt-fill"></i>
      <h2 class="location-name">${this._data.city}, ${this._data.country}</h2>
    </div>
    <p class="date-time">${this._data.localTime}</p>
    <iframe
      src="<%=require('./${this._data.code}_${this._data.isDay}.svg')%>"
      frameborder="0"
    ></iframe>
    <h3 class="temperature">${this._data.temp}&deg;C</h3>
    <p class="description">${this._data.description}</p>
    <div class="highest-lowest-temperature">
      <p>H: ${this._data.maxTemp}&deg;C</p>
      <p>L: ${this._data.minTemp}&deg;C</p>
    </div>`;
  }
}

export default new TemperatureView();
