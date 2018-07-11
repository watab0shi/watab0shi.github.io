const fragSource = `
precision mediump float;// 浮動小数点数の精度（フラグメントシェーダーは mediump にする。highp だとバグが起きやすいらしい）

// メインプログラムから GPU に送られてきた uniform 変数
// 経過時間
uniform float time;

// マウス座標
uniform vec2  mouse;

// 解像度
uniform vec2  resolution;

// 光彩の大きさ
uniform float lightScale;

void main(void) {
  // アスペクト比
  float aspect = resolution.x / resolution.y;

  // ピクセル 座標を -1.0 ~ +1.0 に変換
  vec2 st      = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;

  // 比率補正
  st.x        *= aspect;

  // mouse 座標を -1.0 ~ +1.0 に変換
  vec2 cursor  = (mouse.xy / resolution.xy) * 2.0 - 1.0;

  // 比率補正
  cursor.x    *= aspect;

  // 0.0 ~ 1.0 の sin 関数
  float wave   = sin(time) * 0.5 + 0.5;
  
  // wave を元にベース色を作る
  vec3 color   = vec3(st, wave);

  // 光彩
  float light  = abs(1.0 / length(st - cursor)) * lightScale;

  // ベース色に掛けることで光彩の形でマスキングする
  color       *= vec3(light);

  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;