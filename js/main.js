// Burger menu toggle
(function () {
  var burger = document.querySelector('.burger');
  var menu   = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// Active nav link based on current page filename
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html';

  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href     = link.getAttribute('href') || '';
    var linkPage = href.split('#')[0].split('/').pop();
    if (linkPage === page) link.classList.add('active');
  });
})();
