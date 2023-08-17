export default class View {
  _data;

  render(data, render = true) {
    if (!data) return;
    this._data = data;

    const markup = this._generateMarkUp();
    if (!render) return markup;

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
    });
  }

  clear() {
    this._parentElement.innerHTML = '';
  }
}
