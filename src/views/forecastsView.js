import View from './View.js';

class ForeCastsView extends View {
  _curObj;
  _parentElement;

  display(obj, data, update = false) {
    this._curObj = obj;
    this._parentElement = obj._parentElement;
    if (update) this.update(data);
    else this.render(data);
  }

  // Bundles all items before render
  _generateMarkUp() {
    if (typeof this._data === 'number')
      return new Array(this._data)
        .fill(0)
        .map(() => this._curObj.render(true, false))
        .join('');
    else
      return this._data.map(data => this._curObj.render(data, false)).join('');
  }
}

export default new ForeCastsView();
