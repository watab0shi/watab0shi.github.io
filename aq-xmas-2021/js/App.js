import { delay } from './delay.js';

const INTERVAL_SEC = 10;

/**
 * 
 */
class App {
  /**
   * @param {Object} param 
   * @param {HTMLElement} param.element 
   */
  constructor({ element }) {
    this._init({ element });
  }

  /**
   * @param {Object} param 
   * @param {HTMLElement} param.element 
   */
  _init({ element }) {
    this._element = element;
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this._iframe = null;
    this._index = 0;
    this._sketchUrlArr = [
      'https://editor.p5js.org/abe-aika/full/B7TEfFiQ8',
      'https://editor.p5js.org/misako-baba/full/Pk-EXoEwl',
      'https://editor.p5js.org/wataru-kani/full/YPEDzFCap',
      'https://editor.p5js.org/AQ-TakuOhta/full/gedeGWZpC',
      'https://editor.p5js.org/tsuji-ryohey/full/7AbCbs_8c',
      'https://editor.p5js.org/okubo-yukako/full/1L_GkfPbv',
      'https://editor.p5js.org/misako-baba/full/8MwEAbFi6',
      'https://editor.p5js.org/misako-baba/full/YYSj38T2j',
      'https://editor.p5js.org/nagaya-takeru/full/GU5_Hrtre',
      'https://editor.p5js.org/misako-baba/full/phLc5_ilp',
      'https://editor.p5js.org/wataru-kani/full/Oi4T9Uxiq',
      'https://editor.p5js.org/fujishige-yuji/full/SOpO0lM8l'
    ];

    this.loop();
  }

  addSketch(url) {
    const fragment = document.createDocumentFragment();
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = this._width;
    iframe.height = this._height;
    fragment.appendChild(iframe);
    this._element.appendChild(fragment);
    this._iframe = iframe;
  }

  clear() {
    if (this._iframe) {
      this._iframe.parentElement.removeChild(this._iframe);
    }
  }

  async loop() {
    this.clear();
    this.addSketch(this._sketchUrlArr[this._index]);
    this._index = (this._index + 1) % this._sketchUrlArr.length;
    console.log(this._index);
    
    await delay(INTERVAL_SEC * 1000);
    this.loop();
  }
}

export {
  App
};
