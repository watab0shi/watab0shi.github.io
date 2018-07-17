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

  vec3 color   = vec3( 1.0, 1.0, 1.0 );

  vec3 c1      = vec3( 0.5, 1.0, 1.0 - lightScale );
  vec3 c2      = vec3( 1.0, 0.25, 1.0 - lightScale );

  float s1     = sin( st.y * 1.5 + time * 0.1 ) * 0.5;
  float line1  = 0.1 * lightScale / abs( st.x + s1 );

  float s2     = cos( st.x * -1.5 + time * 0.4 ) * 0.5;
  float line2  = 0.1 * lightScale / abs( st.y + s2 );

  st = rotate( st, PI * 0.3 );

  float s3     = sin( st.x * 2.0 + time * 0.15 ) * 0.5;
  float line3  = 0.2 * lightScale / abs( st.y + s3 );

  float s4     = tan( st.y * -cos( time ) - time * 0.25 ) * 0.35;
  float line4  = 0.2 * lightScale / abs( st.x + s4 );

  float s5     = tan( st.y * sin( time ) + time * 0.15 ) * 0.35;
  float line5  = 0.2 * lightScale / abs( st.x + s5 );

  color       *= c1 * line2;
  color       += c2 * line4 * line5;

  float len    = 0.5 / pow( length( st ), 10.0 );

  color *= clamp( len * 0.5, 0.0, 2.0 );


  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;