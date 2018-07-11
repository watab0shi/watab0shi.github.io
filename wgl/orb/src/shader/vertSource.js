const vertSource = `
// precision mediump float;// 浮動小数点数の精度（フラグメントシェーダーは highp にする。デフォルトで highp なので書かなくてもいい）

attribute vec3 position;// メインプログラムから GPU に送られてきた頂点情報( Vertex Attribute )

void main(void) {
  gl_Position = vec4(position, 1.0);// attribute の頂点をそのまま gl_Positionに反映（ふつうはmodelViewProjectionMatrixとかごにょごにょする）
}`;

export default vertSource;