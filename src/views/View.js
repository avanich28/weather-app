import { importAll } from '../helpers.js';

export default class View {
  _data;
  _images = importAll(require.context('../imgs', false, /\.(png|jpe?g|svg)$/));

  render(data, render = true) {
    if (!data) return;
    this._data = data;

    const markup = this._generateMarkUp();
    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  update(data) {
    if (!data) return;

    const newMarkUp = this.render(data, false);

    // Create DOM in memory
    const newDOM = document.createRange().createContextualFragment(newMarkUp);

    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Compare
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update Text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update Attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  renderSpinner() {
    this._clear();
    const markup = `
      <iframe class="spinner"
        src="${this._findImage(false, 'spinner')}"
        frameborder="0"
      ></iframe>`;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _findImage(weather = true, str) {
    return this._images.find(img =>
      img.includes(weather ? `${this._data.code}_${this._data.isDay}` : str)
    );
  }
}
