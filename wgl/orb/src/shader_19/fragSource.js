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

float circle( vec2 pos, float r ) {
  // return step( length( pos ), r );
  // return smoothstep( r, r * 0.7, length( pos ) );
  return pow(r * 0.8 / length( pos ), 2.0 + (1.0 - lightScale));
}

float nikukyu(vec2 st, vec2 pos, float r) {
  float r2 = r * 1.8;
  vec2  p0 = pos;
  float l0 = circle( p0 - st, r);

  float a1 = PI / 5.0 * 1.0;
  vec2  p1 = p0 + vec2( cos( a1 ), sin( a1 ) ) * r2;
  float l1 = circle( p1 - st, r * 0.4 );

  float a2 = PI / 5.0 * 2.0;
  vec2  p2 = p0 + vec2( cos( a2 ), sin( a2 ) ) * r2;
  float l2 = circle( p2 - st, r * 0.45 );

  float a3 = PI / 5.0 * 3.0;
  vec2  p3 = p0 + vec2( cos( a3 ), sin( a3 ) ) * r2;
  float l3 = circle( p3 - st, r * 0.45 );

  float a4 = PI / 5.0 * 4.0;
  vec2  p4 = p0 + vec2( cos( a4 ), sin( a4 ) ) * r2;
  float l4 = circle( p4 - st, r * 0.4 );

  return l0 + l1 + l2 + l3 + l4;
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

  float mask = 0.0;


  for(float i = 0.0; i < 4.0; i += 1.0) {
    float x = mod(i, 2.0) - 0.5;
    float y = mod( -time + tan( sin(time * 1.0) ) - 0.75 * i, 3.0 ) - 1.5;
    float r = 0.05 + ( pow( sin( y * 2.0 ), 2.0 ) * 0.5 + 0.5 ) * PI * 0.05;
    mask += nikukyu( st, vec2( x, y ), r );
  }

  vec3 color = vec3( 1.0, 0.2, 0.5 );

  color *= min( mask, 1.0 + lightScale * 10.0 );


  // 最終出力する色( rgba )
  gl_FragColor = vec4( color, 1.0 );
}`;

export default fragSource;