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

const float PI = 3.141592653589793238;

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v;
}

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

  float len    = 1.0 / length( st );

  float s3     = pow( sin( time * 0.5 ), 3.0 );

  st           = rotate( st, s3 * 5.5 * ( len ) + time * 1.5 );

  st.x        *= tan( mod( s3, 1.0 ) );

  float line   =  0.6 *  lightScale /  abs( sin( abs( st.y ) * st.x ) ) * 0.1;

  vec3 color   = vec3( lightScale, len * 0.15, 1.0 - len * 0.3 );

  color       *= line;



  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;