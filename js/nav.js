// nav.js — injiserer felles navigasjon på alle sider
// Bruk: <script src="../js/nav.js"></script> (juster sti etter mappe-nivå)

(function () {
  var depth = (function () {
    var path = window.location.pathname;
    var parts = path.split('/').filter(Boolean);
    // Tel kor mange nivå ned vi er frå rota
    var idx = parts.indexOf('nettstad');
    return idx === -1 ? 0 : parts.length - idx - 2;
  })();

  var prefix = depth === 0 ? '' : '../'.repeat(depth);

  var navHTML = `
  <nav style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;" class="bg-indigo-700 text-white py-3 px-4 shadow-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
      <a href="${prefix}index.html" class="flex items-center gap-3 no-underline text-white font-bold hover:text-indigo-200 transition">
        <img src="${prefix}bilete/Logo.png" alt="Logo" style="height:32px;width:auto;" />
        <span class="text-sm sm:text-base">Programmering i matematikk</span>
      </a>
      <div class="flex items-center gap-3 text-sm">
        <a href="${prefix}index.html" class="text-indigo-200 hover:text-white transition no-underline">Modular</a>
        <a href="${prefix}koderom.html" class="bg-indigo-500 hover:bg-indigo-400 transition text-white px-3 py-1 rounded-lg no-underline font-medium">💻 Koderom</a>
      </div>
    </div>
  </nav>`;

  document.addEventListener('DOMContentLoaded', function () {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = navHTML;
    document.body.prepend(wrapper.firstElementChild);
  });
})();
