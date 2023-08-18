import View from './View.js';

class SearchAndChangeTypeView extends View {
  // _parentEl = document.querySelector('.search-location');
  _form = document.querySelector('.location-form');
  _tempTypeBtn = document.querySelector('.temperature-type-btn');
  _errEl = document.querySelector('.error');
  _errMsg = 'This location is not found.';

  addHandlerSubmit(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      this._clearErrorMsg();
      const dataEntries = [...new FormData(this._form)];
      const query = Object.fromEntries(dataEntries).location;
      if (!query) return;
      this._clearInput();
      handler(query);
    });
  }

  // FIXME
  addHandlerClick(handler) {
    this._tempTypeBtn.addEventListener('click', () => {
      handler();
    });
  }

  renderErrorMsg() {
    this._errEl.textContent = this._errMsg;
  } // FIXME

  _clearErrorMsg() {
    this._errEl.textContent = '';
  }

  _clearInput() {
    this._form.querySelector('input').value = '';
  }
}

export default new SearchAndChangeTypeView();
