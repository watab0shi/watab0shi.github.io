import { Geometry } from 'three/src/core/Geometry';
import { Line } from 'three/src/objects/Line';
import { Vector3 } from 'three/src/math/Vector3';
import { _Math } from 'three/src/math/Math';
import { LineBasicMaterial } from 'three/src/materials/LineBasicMaterial';


export default class RegPolygonLine extends Line {
  constructor(pos, radius, color, numAngles) {
    const nA  = (numAngles >= 9) ? 32 : numAngles;
    const geo = new Geometry();
    const mat = new LineBasicMaterial({ color: color });

    const a = (Math.PI * 2) / nA;
    for(let i = 0; i < nA + 1; ++i) {
      const p = new Vector3(Math.cos(i * a), Math.sin(i * a), 0);
      geo.vertices.push(p);
    }

    super(geo, mat);
    this.position.set(pos.x, pos.y, pos.z);
    this.rotation.x = _Math.randFloatSpread(Math.PI / 4);
    this.rotation.y = _Math.randFloatSpread(Math.PI / 4);
    this.rotation.z = _Math.randFloatSpread(Math.PI);
    this.scale.set(radius, radius, radius);
  }
};
