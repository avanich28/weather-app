import View from './View.js';

class SearchView extends View {
  _parentEl = document.querySelector('.search-location');
  _form = document.querySelector('.location-form');

  addHandlerSubmit(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataEntries = [...new FormData(this._form)];
      const query = Object.fromEntries(dataEntries).location;
      if (!query) return;
      this._clearInput();
      handler(query);
    });
  }

  errorMsg() {} // FIXME

  _clearInput() {
    this._form.querySelector('input').value = '';
  }
}

export default new SearchView();
