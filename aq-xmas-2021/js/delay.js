/**
 * setTimeoutをPromiseでラップしたやーつ
 * @param {Number} ms 待機時間（ミリ秒）
 */
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export {
  delay
};
