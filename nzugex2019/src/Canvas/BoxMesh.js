import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { Mesh } from 'three/src/objects/Mesh';

import { Group } from 'three/src/objects/Group';
import { Vector3 } from 'three/src/math/Vector3';
import { _Math } from 'three/src/math/Math';

import vertSrc from './shaders/vert.glsl';
import fragSrc from './shaders/frag_shaded.glsl';

const createPlaneMesh = (pos, rot, size, color, alpha, uniforms) => {
  const geo  = new PlaneBufferGeometry(1, 1, 1, 1);
  const mat  = (uniforms !== undefined) ? new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertSrc,
    fragmentShader: fragSrc
  }) : new MeshBasicMaterial({
    color: color,
    opacity: alpha,
    transparent: true
  });
  const mesh = new Mesh(geo, mat);

  mesh.position.set(pos.x, pos.y, pos.z);
  mesh.scale.set(size, size, size);
  mesh.rotation.set(rot.x, rot.y, rot.z);
  
  return mesh;
};

export default class BoxMesh extends Group {
  constructor(pos, size, color) {
    super();

    this.uniforms = {
      'uTime'     : { value: 0.0 },
      'uColor'    : { value: color },
      'uMaskType' : { value: _Math.randInt(0, 4) }
    };

    const pi = Math.PI;
    const hp = pi * .5;

    const cz       = color;
    const plane_pz = createPlaneMesh(new Vector3( .0,  .0,  .5), new Vector3(  0,  0,  0), 1, cz, 1.);
    const plane_mz = createPlaneMesh(new Vector3( .0,  .0, -.5), new Vector3( pi,  0,  0), 1, cz, 1.);

    const cy       = color.clone().multiplyScalar(.75);
    const plane_py = createPlaneMesh(new Vector3( .0,  .5,   0), new Vector3( -hp,  0,  0), 1, cy, 1.);
    const plane_my = createPlaneMesh(new Vector3( .0, -.5,   0), new Vector3(  hp,  0,  0), 1, cy, 1.);

    const cx       = color;
    const plane_px = createPlaneMesh(new Vector3( .5,   0,   0), new Vector3(  0,  hp,  0), 1, cx, 1., this.uniforms);
    const plane_mx = createPlaneMesh(new Vector3(-.5,   0,   0), new Vector3(  0, -hp,  0), 1, cx, 1., this.uniforms);

    this.add(plane_pz);
    this.add(plane_mz);

    this.add(plane_py);
    this.add(plane_my);

    this.add(plane_px);
    this.add(plane_mx);

    this.position.set(pos.x, pos.y, pos.z);
    this.scale.set(size, size, size);

    const rotAxis = (new Vector3( _Math.randFloatSpread(2), _Math.randFloatSpread(2), _Math.randFloatSpread(2) )).normalize();
    const angle   = _Math.randFloatSpread(2) * Math.PI;
    this.setRotationFromAxisAngle(rotAxis, angle);

    this.rotEaseX = (0.004 + _Math.randFloatSpread(0.003)) * ((_Math.randFloatSpread(1) > 0) ? 1 : -1);
    this.rotEaseY = (0.004 + _Math.randFloatSpread(0.003)) * ((_Math.randFloatSpread(1) > 0) ? 1 : -1);
  }

  update(sec) {
    this.uniforms['uTime'].value = sec;
  }

  scrolled(y) {
    this.rotation.x = y * (Math.PI * 300) * this.rotEaseX;
    this.rotation.y = y * (Math.PI * 300) * this.rotEaseY;
  }
};
