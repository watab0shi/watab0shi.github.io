import { Vector2 } from 'three/src/math/Vector2';
import { Vector3 } from 'three/src/math/Vector3';
import { _Math } from 'three/src/math/Math';
import { Shape } from 'three/src/extras/core/Shape'
import { ShapeBufferGeometry } from 'three/src/geometries/ShapeGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { Mesh } from 'three/src/objects/Mesh';

import vertSrc from './shaders/vert.glsl';
import fragSrc from './shaders/frag_shaded.glsl';

export default class RegPolygonMesh extends Mesh {
  constructor(pos, radius, color, numAngles) {
    const sMat = new ShaderMaterial({
      uniforms: {
        'uTime'     : { value: 0.0 },
        'uColor'    : { value: color },
        'uMaskType' : { value: _Math.randInt(0, 4) }
      },
      vertexShader: vertSrc,
      fragmentShader: fragSrc
    });
    const nA  = (numAngles >= 9) ? 32 : numAngles;
    const s = new Shape();
    const a = (Math.PI * 2) / nA;
    for(let i = 0; i < nA + 1; ++i) {
      const x = Math.cos(i * a);
      const y = Math.sin(i * a);
      if(i == 0) s.moveTo(x, y);
      else       s.lineTo(x, y);
    }

    const geo = new ShapeBufferGeometry(s);
    const mat = new MeshBasicMaterial({ color: color });

    super(geo, sMat);
    this.position.set(pos.x, pos.y, pos.z);
    this.rotation.x = _Math.randFloatSpread(Math.PI / 4);
    this.rotation.y = _Math.randFloatSpread(Math.PI / 4);
    this.rotation.z = _Math.randFloatSpread(Math.PI);
    this.scale.set(radius, radius, radius);
  }

  update(sec) {
    this.material.uniforms['uTime'].value = sec;
  }
};