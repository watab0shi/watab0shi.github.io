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

  float len    = length( cursor - st );

  st          *= vec2( cos( len - time ) ) * lightScale;

  st           = rotate( st,  sin( len - time * 0.2 ) );

  float pSize    = 0.1;

  vec2 center    = st + vec2( pSize * 0.5 );

  float patternY = mod( center.y, pSize ) * ( 1.0 / pSize );
  patternY       = sin( patternY * PI );
  patternY       = step( patternY, 0.9 );

  float patternX = mod( center.x, pSize ) * ( 1.0 / pSize );
  patternX       = sin( patternX * PI );
  patternX       = step( patternX, 0.9 );

  vec3  color  = vec3( 1.0, len, 0.2 );

  color *= 1.0 / ( patternX * patternY );


  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;