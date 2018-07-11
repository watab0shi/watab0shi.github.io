// createShaderFromSource ( string からシェーダーを生成 )
//--------------------------------------------------
export const createShaderFromSource = (_gl, _source, _type) => {
  let shader = _gl.createShader(_type);

  // 生成されたシェーダーにソースを割り当てる
  _gl.shaderSource(shader, _source);

  // シェーダーをコンパイル
  _gl.compileShader(shader);

  // シェーダーが正しくコンパイルされたかチェック
  if (_gl.getShaderParameter(shader, _gl.COMPILE_STATUS)) {
    // 成功していたらシェーダーを返す
    return shader;
  }
  else {
    // 失敗していたらコンソールにログ出し
    console.log("[createShaderFromSource]", "compile failed!", _gl.getShaderInfoLog(shader));
  }
};


// createProgram ( プログラムオブジェクトを生成、シェーダーをリンク )
//--------------------------------------------------
export const createProgram = (_gl, _vs, _fs) => {
  // プログラムオブジェクトを生成
  const program = _gl.createProgram();

  // プログラムオブジェクトにシェーダーを割り当て
  _gl.attachShader(program, _vs);
  _gl.attachShader(program, _fs);

  // シェーダーをリンク
  _gl.linkProgram(program);

  // シェーダーのリンクが正しく行われたかチェック
  if (_gl.getProgramParameter(program, _gl.LINK_STATUS)) {
    // 成功していたらプログラムオブジェクトを有効に
    _gl.useProgram(program);

    // プログラムオブジェクトを返す
    return program;
  }
  else {
    // 失敗していたらコンソールにログ出し
    console.log("[createProgram]", "link failed!", _gl.getProgramInfoLog(program));
  }
};


// createVbo ( Vertex Buffer Object を生成 )
//--------------------------------------------------
export const createVbo = (_gl, _data) => {
  // バッファオブジェクトを生成
  const vbo = _gl.createBuffer();

  // バッファをバインド
  _gl.bindBuffer(_gl.ARRAY_BUFFER, vbo);

  // バッファにデータをセット
  _gl.bufferData(_gl.ARRAY_BUFFER, new Float32Array(_data), _gl.STATIC_DRAW);

  // バッファのバインドを無効化
  _gl.bindBuffer(_gl.ARRAY_BUFFER, null);

  return vbo;
};


// setAttribute ( VBOをバインド、attributeを登録 )
//--------------------------------------------------
export const setAttribute = (_gl, _vbo, _attL, _attS) => {
  for (let i in _vbo) {
    // VBOをバインド
    _gl.bindBuffer(_gl.ARRAY_BUFFER, _vbo[i]);

    // attribute 属性を有効にする
    _gl.enableVertexAttribArray(_attL[i]);

    // attribute 属性を登録
    _gl.vertexAttribPointer(_attL[i], _attS[i], _gl.FLOAT, false, 0, 0);
  }
};


// createIbo ( Index Buffer Object を生成 )
//--------------------------------------------------
export const createIbo = (_gl, _data) => {
  // バッファオブジェクトを生成
  const ibo = _gl.createBuffer();

  // IBOをバインド
  _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, ibo);

  // IBOにデータを格納
  _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, new Int16Array(_data), _gl.STATIC_DRAW);

  // バインド解除
  _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, null);

  return ibo;
};


// createUniforms
//--------------------------------------------------
export const createUniforms = (pxRatio = 1) => {
  return {
    time: {
      name: "time",
      type: "1f",
      loc: null,
      val: 0.0
    },
    mouse: {
      name: "mouse",
      type: "2fv",
      loc: null,
      val: {
        x: 0.0,
        y: 0.0
      }
    },
    resolution: {
      name: "resolution",
      type: "2fv",
      loc: null,
      val: {
        x: window.innerWidth  * pxRatio,
        y: window.innerHeight * pxRatio
      }
    },
    lightScale: {
      name: "lightScale",
      type: "1f",
      loc: null,
      val: 0.1
    }
  };
};


// setUniforms
//--------------------------------------------------
export const setUniforms = (_gl, _uniforms) => {
  for (let i in _uniforms) {
    switch (_uniforms[i].type) {
      case "1f":
        _gl.uniform1f(_uniforms[i].loc, _uniforms[i].val);
        break;

      case "2fv":
        _gl.uniform2fv(_uniforms[i].loc, [_uniforms[i].val.x, _uniforms[i].val.y]);
        break;

      default :
        console.log("[setUniforms]", "Invalid uniform type!");
        break;
    }
  }
};