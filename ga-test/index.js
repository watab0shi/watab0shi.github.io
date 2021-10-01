window.isGACreated = false;

const onHashChange = () => {
  const hashname = location.hash.length > 0 ? location.hash.slice(1) : 'index';
  console.log('onHashChange', hashname);

  if (typeof window.ga === 'function') {
    if (!window.isGACreated) {// 初回のみ create する
      ga('create', 'UA-209086237-1', 'auto');
      window.isGACreated = true;
    }
    ga('send', 'pageview', { 'page': `/ga-test/${ hashname }.html`, 'title': hashname });
  }
};

const init = () => {
  window.addEventListener('hashchange', onHashChange);
};

document.addEventListener('DOMContentLoaded', init);