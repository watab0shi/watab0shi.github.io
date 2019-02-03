import { Scene } from 'three/src/scenes/Scene';
import MeshGroup from './MeshGroup'
import Canvas from './Canvas'

export default class CanvasGroup {
  constructor() {
    const isSP = window.innerWidth < 768;
    this.meshes = new MeshGroup(isSP);
    this.scene  = new Scene();

    this.scene.add(this.meshes);

    this.canvasB = new Canvas('canvas-container', false);
    this.canvasF = new Canvas('canvas-container', true);

    this.render();
  }

  render() {
    requestAnimationFrame(() => { this.render(); });

    // ミリ秒から秒に変換
    const sec = performance.now() / 1000;

    this.meshes.update(sec);

    this.canvasB.render(this.scene);
    this.canvasF.render(this.scene);
  }

  mouseMoved(x, y) {
    this.canvasB.mouseMoved(x, y);
    this.canvasF.mouseMoved(x, y);
  }

  scrolled(y) {
    this.meshes.scrolled(y);
  }

  resized(w, h) {
    this.canvasB.resized(w, h);
    this.canvasF.resized(w, h);
  }
};