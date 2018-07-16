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

  float len    = length( cursor - st );
  float t      = time * ( 3.0 + 10.0 * lightScale );
  float scale  = 40.0 * lightScale;
  float circle = ( sin( len * scale - t ) * 0.5 + 0.5 );

  circle       = clamp( 1.0 / circle * 0.01, 0.0, 1.0 );

  circle      *= 0.2 / len * 100.0 * lightScale;

  float cx     = abs( cursor.x );

  vec3 color   = vec3( cx, 1.0 - cx, abs( cursor.y ) );

  color       *= circle;

  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;