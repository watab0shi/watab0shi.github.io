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

const float num = 60.0;

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

  float s    = sin( st.y * 20.0 * lightScale );
  float x    = s * tan( pow( mod( st.y * 0.5 + time * 0.5, 1.0 ), 5.0 ) ) * lightScale;
  float s2   = sin( st.x * 20.0 * lightScale );
  float y    = s2 * tan( pow( mod( st.x * 0.5 + time * 0.5, 1.0 ), 5.0 ) ) * lightScale;
  st        += vec2( x, y );

  float len  = 0.3 / length( cursor - st );

  vec3 c0 = vec3( 1.0, 0.5, 0.01 );
  vec3 c1 = vec3( 0.01, 0.5, 1.0 );
  vec3 color = mix( c0, c1, mouse.x / resolution.x );

  color *= len;


  // 最終出力する色( rgba )
  gl_FragColor = vec4( color, 1.0 );
}`;

export default fragSource;