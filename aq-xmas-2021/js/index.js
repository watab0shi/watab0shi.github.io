import { App } from './App.js';

const init = () => {
  new App({
    element: document.getElementById('app')
  });
};

if (document.readyState !== "complete") {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}