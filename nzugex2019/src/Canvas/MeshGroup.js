import BoxMesh from './BoxMesh';
import RegPolygonLine from './RegPolygonLine';
import RegPolygonMesh from './RegPolygonMesh';

import { Group } from 'three/src/objects/Group';
import { Vector3 } from 'three/src/math/Vector3';
import { _Math } from 'three/src/math/Math';
import { Color } from 'three/src/math/Color';

import { VertexColors } from 'three/src/constants';

const palette = [
  0xff0000,
  0x00ff00,
  0x0000ff,
  0xff00ff,
  0xffff00,
  0x00ffff
];

export default class MeshGroup extends Group {
  constructor(isSP) {
    super();

    this.boxes      = [];
    this.polyLines  = [];
    this.polyMeshes = [];

    const r = (isSP) ? window.innerHeight : window.innerWidth;

    const numBoxes = (isSP) ? 20 : 50;
    for(let i = 0; i < numBoxes; ++i ) {
      const bPos = new Vector3( _Math.randFloatSpread( r ), _Math.randFloatSpread( r ), _Math.randFloatSpread( r*3 ) );
      const bSiz = _Math.randFloat(80, 150) * ((isSP) ? 0.5 : 1);
      const bCol = new Color(palette[_Math.randInt(0, palette.length-1)]);
      this.boxes.push(new BoxMesh(bPos, bSiz, bCol));

      const plPos = new Vector3( _Math.randFloatSpread( r ), _Math.randFloatSpread( r ), _Math.randFloatSpread( r*3 ) );
      const plSiz = _Math.randFloat(40, 80) * ((isSP) ? 0.5 : 1);
      const plCol = new Color(palette[_Math.randInt(0, palette.length-1)]);
      const plAgl = _Math.randInt(3, 9);
      this.polyLines.push(new RegPolygonLine(plPos, plSiz, plCol, plAgl));

      const pmPos = new Vector3( _Math.randFloatSpread( r ), _Math.randFloatSpread( r ), _Math.randFloatSpread( r*3 ) );
      const pmSiz = _Math.randFloat(40, 80) * ((isSP) ? 0.5 : 1);
      const pmCol = new Color(palette[_Math.randInt(0, palette.length-1)]);
      const pmAgl = _Math.randInt(3, 9);
      this.polyMeshes.push(new RegPolygonMesh(pmPos, pmSiz, pmCol, pmAgl));
    }

    for(const b  of this.boxes)      this.add(b);
    for(const pl of this.polyLines)  this.add(pl);
    for(const pm of this.polyMeshes) this.add(pm);

    this.position.z = -2000;

    this.smoothY = 1.0;
    this.scrollY = 0;
  }

  update(sec) {
    this.smoothY += (this.scrollY - this.smoothY) * 0.05;

    const s = this.smoothY * 4200;
    this.position.z = -2000 + s;

    for(const b of this.boxes) {
      b.scrolled(this.smoothY);
      b.update(sec);
    }
    for(const pm of this.polyMeshes) pm.update(sec);
  }

  scrolled(y) {
    // for(const b of this.boxes) {
    //  b.scrolled(y);
    // }
    this.scrollY = y;
  }
};