import CanvasGroup from './Canvas/CanvasGroup'

export default class Page {
  constructor() {
    const eTransparents = document.querySelectorAll('.is-transparent');
    for(const e of eTransparents) {
      e.classList.remove('is-transparent');
    }

    const canvasGroup = new CanvasGroup();

    window.addEventListener('mousemove', e => {
      canvasGroup.mouseMoved(e.clientX, e.clientY);
    });
    
    window.addEventListener('scroll', e => {
      const sy = window.scrollY;
      const eScroll = document.querySelector('.txt-scroll');
      if(sy <= 0) eScroll.classList.remove('is-hidden');
      else         eScroll.classList.add('is-hidden');

      const eMain = document.querySelector('.main');
      const rect  = eMain.getBoundingClientRect();

      const offsetY = window.innerHeight;
      const y       = offsetY - rect.y;
      const maxY    = window.innerHeight + rect.height;
      const yPct    = y / maxY;
      canvasGroup.scrolled(yPct);
    });

    window.addEventListener('resize', e => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvasGroup.resized(w, h);

      // const eDebug = document.querySelector('.debug');
      // eDebug.innerHTML = `${ w } x ${ h } , ${ window.outerHeight }`;
    });
  }
};