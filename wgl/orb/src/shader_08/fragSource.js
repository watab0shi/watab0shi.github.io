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

  vec2 stScale = vec2( 20.0, 20.0 ) * lightScale;
  vec2 stTime  = vec2( -1.0, 1.0 ) * time;
  st          += vec2( tan( st.x * stScale.x + stTime.x ), tan( st.y * stScale.y + stTime.y ) ) * lightScale;

  float radius = 0.2 * lightScale;
  vec2  pos    = cursor;
  float size   = 1.0 - lightScale;
  float len    = size / length( pos - st );

  float r      = abs( cos( time ) );
  float g      = abs( sin( time ) );
  vec3  color  = vec3( r, g, 1.0 );

  color       *= len;

  // 最終出力する色( rgba )
  gl_FragColor = vec4(color, 1.0);
}`;

export default fragSource;