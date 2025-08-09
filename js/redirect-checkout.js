(function(){
  function installLinks() {
    const valueMap = {
      'checkout20': 20,
      'checkout50': 50,
      'checkout75': 75,
      'checkout100': 100,
      'checkout150': 150,
      'checkout200': 200,
      'checkout250': 250,
      'checkout300': 300,
    };
    const anchors = document.querySelectorAll('a[href^="checkout"]');
    anchors.forEach(a => {
      const key = a.getAttribute('href').replace(/\.html$/,'');
      const amount = valueMap[key];
      if (!amount) return;
      a.addEventListener('click', function(ev){
        ev.preventDefault();
        const target = 'checkout.html?amount=' + amount;
        window.location.href = target;
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installLinks);
  } else {
    installLinks();
  }
})();

