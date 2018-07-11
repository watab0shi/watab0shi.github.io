import WebGL from "./WebGL";
import * as dat from "dat.gui";

const init = _ => {
  const wgl = new WebGL();
  console.log(wgl);

  const gui    = new dat.GUI();
  const folder = gui.addFolder("LightScale");
  folder.add(wgl.uniforms.lightScale, "val", 0.0, 1.0).step(0.01);
  folder.open();
  console.log(gui);
};

window.addEventListener("DOMContentLoaded", init);