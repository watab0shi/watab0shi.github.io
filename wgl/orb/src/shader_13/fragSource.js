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

const float num = 6.0;

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

  
  float sum = 0.0;

  for( float i = 0.0; i < num; i += 1.0 )
  {
    float a0 = i * ( ( PI * 2.0 ) / num );
    vec2  p0 = vec2( cos( time + a0 ), sin( time + a0 ) ) * sin( cursor.x );
    float l0 = 1.0 / length( p0 - st ) * lightScale;

    sum += l0;
  }

  vec3  color  = vec3( 1.0-abs( st.x ), 0.2, 1.0-abs( st.y ) );

  color *= sum / num;

  float div = 1.0 / lightScale;
  color = floor( color * div ) / div;


  // 最終出力する色( rgba )
  gl_FragColor = vec4( color, 1.0 );
}`;

export default fragSource;