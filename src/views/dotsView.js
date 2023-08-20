import View from './View.js';

class DotsView extends View {
  _parentElement = document.querySelector('.dots');
  _curDot = 0;
  _index = 0;
  _allBtns = [this._parentElement];

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const dot = e.target.closest('.bi-dot');
      if (!dot) return;

      const index = +dot.dataset.index;
      if (index === this._curDot) return;

      this._curDot = index;
      this._activeDot(dot);
      handler(index);
    });
  }

  switchDot(page) {
    this._curDot = page - 1;
    const allDots = this._parentElement.querySelectorAll('.bi-dot');
    this._activeDot(allDots[this._curDot]);
  }

  reset() {
    this._curDot = this._index = 0;
  }

  _activeDot(el) {
    this._parentElement
      .querySelectorAll('.bi-dot')
      .forEach(el => el.classList.remove('active-dot'));
    el.classList.add('active-dot');
  }

  _generateMarkUp() {
    // Sets initial active dot
    const i = this._index;
    this._index++;
    return `
      <button><i class="bi bi-dot ${
        i === 0 ? 'active-dot' : ''
      }" data-index="${i}"></i></button>`;
  }
}

export default new DotsView();
