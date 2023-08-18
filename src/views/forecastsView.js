import View from './View.js';

class ForeCastsView extends View {
  _curObj;
  _parentElement;

  display(obj, data) {
    this._curObj = obj;
    this._parentElement = obj._parentElement;
    this.render(data);
  }

  // Bundles all items before render
  _generateMarkUp() {
    return this._data.map(data => this._curObj.render(data, false)).join('');
  }
}

export default new ForeCastsView();
