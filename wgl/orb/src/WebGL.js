import vertSource from "./shader/vertSource";
import fragSource from "./shader/fragSource";
import {
  createShaderFromSource,
  createProgram,
  createVbo,
  setAttribute,
  createIbo,
  createUniforms,
  setUniforms
} from "./glUtil"

export default class WebGL {
  constructor() {
    this.lastTimeStamp = performance.now();

    // canvas のピクセル比率
    this.pxRatio = window.devicePixelRatio;

    // シェーダーに渡す uniform 変数
    this.uniforms = createUniforms(this.pxRatio);
    const w = this.uniforms.resolution.val.x;
    const h = this.uniforms.resolution.val.y;

    // canvas エレメントを取得
    this.canvas        = document.getElementById("canvas");
    this.canvas.width  = w;
    this.canvas.height = h;

    // マウスイベント登録
    this.mouse = {x: 0, y: 0};
    this.canvas.addEventListener("mousemove", e => this.onMouseMove(e), false);

    // リサイズイベント登録
    window.addEventListener("resize", e => this.onResize(e), false);

    // webgl コンテキストを取得
    this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");

    // 描画範囲設定
    this.gl.viewport(0, 0, w, h);

    // 頂点シェーダーとフラグメントシェーダーを生成
    const vShader = createShaderFromSource(this.gl, vertSource, this.gl.VERTEX_SHADER);
    const fShader = createShaderFromSource(this.gl, fragSource, this.gl.FRAGMENT_SHADER);

    // プログラムオブジェクトの生成とリンク
    const prg = createProgram(this.gl, vShader, fShader);

    // uniformLocation の取得
    for (let i in this.uniforms) {
      this.uniforms[i].loc = this.gl.getUniformLocation(prg, this.uniforms[i].name);
    }

    // 頂点情報( x, y, z )
    const position = [
      -1.0,  1.0, 0.0,// 0 : top    left
       1.0,  1.0, 0.0,// 1 : top    right
      -1.0, -1.0, 0.0,// 2 : bottom left
       1.0, -1.0, 0.0//  3 : bottom right
    ];
    // attributeLocation を取得
    const attLocation = this.gl.getAttribLocation(prg, "position");

    // 頂点VBO生成
    const positionVbo = createVbo(this.gl, position);

    // 頂点インデックス情報（反時計回りに三角を作る）
    const index = [
      0, 2, 1,// ◤
      3, 1, 2//  ◢
    ];
    // IBO生成
    const ibo = createIbo(this.gl, index);

    // VBOをバインド ( VBO, attributeLocation, attributeStride )
    setAttribute(this.gl, [positionVbo], [attLocation], [3]);

    // IBOをバインド
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, ibo);

    // ブレンディングを有効にする
    this.gl.enable(this.gl.BLEND);

    // 深度テストを有効にする
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);

    // コンテキストを毎フレームclearする色
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // 描画開始
    this.render();
  }

  render(timeStamp) {
    requestAnimationFrame(_ => this.render(_));

    // 時間を更新
    const elapsedTime = (timeStamp - this.lastTimeStamp) / 1000.;

    // アルファブレンディング
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    // 深度クリア
    this.gl.clearDepth(1.0);

    // 画面クリア
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    // time 更新
    this.uniforms.time.val = elapsedTime;

    // マウス追従
    this.uniforms.mouse.val.x += (this.mouse.x - this.uniforms.mouse.val.x) * 0.1;
    this.uniforms.mouse.val.y += (this.mouse.y - this.uniforms.mouse.val.y) * 0.1;

    // uniform 変数更新
    setUniforms(this.gl, this.uniforms);

    // 板ポリ描画
    this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0);

    // 再描画
    this.gl.flush();
  }

  onMouseMove(_e) {
    this.mouse = {
      x: _e.offsetX * this.pxRatio,
      y: this.uniforms.resolution.val.y - (_e.offsetY * this.pxRatio)// GLSLは左下原点なのでyだけ反転
    };
  }

  onResize(_e) {
    const w = window.innerWidth  * this.pxRatio;
    const h = window.innerHeight * this.pxRatio

    // uniform.resolution を更新
    this.uniforms.resolution.val.x = w;
    this.uniforms.resolution.val.y = h;

    // canvas をリサイズ
    this.canvas.width  = w;
    this.canvas.height = h;

    // 描画範囲を再設定
    this.gl.viewport(0, 0, w, h);
  }
}