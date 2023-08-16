export default class View {
  images = [];
  _data;

  render(data) {
    if (!data) return;
    this._data = data;
    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  update(dataSet) {
    if (!data) return;
    this._data = dataSet;

    const newMarkUp = []; // FIXME

    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
  }
}
