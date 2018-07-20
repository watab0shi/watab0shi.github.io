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

  float radius = 0.8;
  if( lightScale > 0.25 )      radius = sin( time ) * 0.8;
  if( lightScale > 0.5 )  radius = cos( time ) * 0.8;
  if( lightScale > 0.75 ) radius = tan( time ) * 0.1;

  float t0     = time + sin( time );
  vec2  p0     = vec2( cos( t0 ), sin( t0 ) ) * radius;
  float len0   = ( 1.0 / length( p0 - st ) ) * 0.1;

  float t1     = time + cos( time );
  vec2  p1     = vec2( cos( t1 ), sin( t1 ) ) * radius;
  float len1   = ( 1.0 / length( p1 - st ) ) * 0.1;

  float t2     = time + tan( time );
  vec2  p2     = vec2( cos( t2 ), sin( t2 ) ) * radius;
  float len2   = ( 1.0 / length( p2 - st ) ) * 0.1;

  vec3 color   = vec3( len0, len1, len2 );



  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;