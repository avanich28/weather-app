import View from './View.js';

class SearchAndChangeTypeView extends View {
  // _parentEl = document.querySelector('.search-location');
  _form = document.querySelector('.location-form');
  _tempTypeBtn = document.querySelector('.temperature-type-btn');
  _allCharTypes = this._tempTypeBtn.querySelectorAll('span');
  _errEl = document.querySelector('.error');
  _errMsg = 'This location is not found.';
  _type = 0;

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

  addHandlerClick(handler) {
    this._tempTypeBtn.addEventListener('click', () => {
      this._allCharTypes.forEach(el => el.classList.toggle('active-type'));

      this._type = this._type === 0 ? 1 : 0;
      handler(this._type);
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
