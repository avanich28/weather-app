import View from './View.js';

class HourlyView extends View {
  _parentElement = document.querySelector('.weather-hourly-list');
  _arrowBtnLeft = document.querySelector('.arrow-btn-left');
  _arrowBtnRight = document.querySelector('.arrow-btn-right');

  addHandlerClickArrowLeft(handler) {
    this._arrowBtnLeft.addEventListener('click', e => {
      const btn = e.target.closest('.bi-caret-left-fill');
      if (!btn) return;

      handler();
    });
  }

  addHandlerClickArrowRight(handler) {
    this._arrowBtnRight.addEventListener('click', e => {
      const btn = e.target.closest('.bi-caret-right-fill');
      if (!btn) return;

      handler();
    });
  }

  _generateMarkUp() {
    return `
      <li class="hourly-item">
        <p class="${typeof this._data.hour === 'string' ? 'bold' : ''}">${
      this._data.hour
    }</p>
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

export default new HourlyView();
