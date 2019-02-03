import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Vector2 } from 'three/src/math/Vector2';

export default class Canvas {
  constructor(canvasIdBase, isFront, scene) {
    this.isFront = isFront;

    // マウス座標
    this.mouse = new Vector2(0, 0);

    // ウィンドウサイズ
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    // レンダラーを作成
    this.renderer = new WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.w, this.h);// 描画サイズ
    this.renderer.setPixelRatio(window.devicePixelRatio);// ピクセル比
    this.renderer.setClearColor(0xffffff, 0);

    // #canvas-containerにレンダラーのcanvasを追加
    const container = document.getElementById(canvasIdBase + (this.isFront ? '-front' : '-back'));
    container.appendChild(this.renderer.domElement);

    const fov    = 90;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist   = (this.h / 2) / Math.tan(fovRad);
    const near   = this.isFront ?        1 : dist;
    const far    = this.isFront ? dist + 1 : dist * 15;
    this.camera  = new PerspectiveCamera(fov, this.w / this.h, near, far);
    this.camera.position.z = dist;
  }

  render(scene) {
    // 画面に表示
    this.renderer.render(scene, this.camera);
  }

  mouseMoved(x, y) {
    this.mouse.x =  x - (this.w / 2);// 原点を中心に持ってくる
    this.mouse.y = -y + (this.h / 2);// 軸を反転して原点を中心に持ってくる
  }

  resetCamera() {
    const fov    = 90;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist   = (this.h / 2) / Math.tan(fovRad);
    const near   = this.isFront ?        1 : dist;
    const far    = this.isFront ? dist + 1 : dist * 10;
    this.camera.position.z = dist;
    this.camera.aspect = this.w / this.h;
    this.camera.updateProjectionMatrix();
  }

  resized(w, h) {
    this.w = w;
    this.h = h;

    this.renderer.setSize(w, h);
    this.resetCamera();
  }
};