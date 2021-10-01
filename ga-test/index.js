const onHashChange = () => {
  const hashname = location.hash.length > 0 ? location.hash.slice(1) : 'index';
  console.log('onHashChange', hashname);

  ga('set', 'page', `/ga-test/${ hashname }.html`);
  ga('send', 'pageview');
};

const init = () => {
  window.addEventListener('hashchange', onHashChange);
};

document.addEventListener('DOMContentLoaded', init);