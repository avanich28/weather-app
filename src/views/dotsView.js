import View from './View.js';

class DotsView extends View {
  _parentElement = document.querySelector('.dots');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const dot = e.target.closest('.bi-dot');
      if (!dot) return;

      this._activeDot(dot);

      const index = +dot.dataset.index;
      handler(index);
    });
  }

  switchDot(page) {
    const allDots = this._parentElement.querySelectorAll('.bi-dot');
    this._activeDot(allDots[page - 1]);
  }

  _activeDot(el) {
    this._parentElement
      .querySelectorAll('.bi-dot')
      .forEach(el => el.classList.remove('active-dot'));
    el.classList.add('active-dot');
  }

  _generateMarkUp() {
    // Sets initial active dot
    const index = this._parentElement.children.length;
    return `
      <button><i class="bi bi-dot ${
        index === 0 ? 'active-dot' : ''
      }" data-index="${index}"></i></button>`;
  }
}

export default new DotsView();
