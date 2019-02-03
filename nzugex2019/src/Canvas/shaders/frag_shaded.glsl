uniform float uTime;
uniform vec3  uColor;
uniform float uMaskType;
varying vec2  vUv;

const float PI = 3.141592653589793238462643383279;

// line
float mask00( vec2 _pos, float _time, float _rad, float _w )
{
  float scl  = 4.0;
  float spd  = _time * 0.2;
  vec2  nrm  = vec2( cos( _rad ), sin( _rad ) );
  float dist = dot( nrm, _pos );
  return step( mod( dist * scl + spd, 0.5 ), 0.5 * _w );
}

// diamond
float mask01( vec2 _pos, float _time, float _rad, float _w )
{
  float m1 = mask00( _pos, _time,  _rad, _w );
  float m2 = mask00( _pos, _time, -_rad, _w);
  return m1 * m2;
}

// check
float mask02( vec2 _pos, float _time )
{
  float scl = 2.0;
  float spd = _time * 0.2;
  float mx  = step( mod( _pos.x * scl + spd, 0.5 ), 0.25 );
  float my  = step( mod( _pos.y * scl + spd, 0.5 ), 0.25 );
  return ( mx == my ) ? 1.0 : 0.0;
}

void main( void )
{
  vec2  pos  = vUv;
  float mask = mask00( pos, uTime, PI * 0.25, 0.5 );

  if( uMaskType == 1.0 ) mask = max( mask00( pos, uTime + 0.15, 0.0, 0.7 ) - mask00( pos, uTime, 0.0, 0.2 ), 0.0 );
  if( uMaskType == 2.0 ) mask = mask00( pos, uTime, 0.0, 0.5 );
  if( uMaskType == 3.0 ) mask = mask01( pos, uTime, PI * 0.111111, 0.5 );
  if( uMaskType == 4.0 ) mask = mask02( pos, uTime );

  vec3  col    = uColor;
  gl_FragColor = vec4( col * mask, mask );
  // gl_FragColor = vec4( pos.x, pos.y, 0.0, 1.0 );
}