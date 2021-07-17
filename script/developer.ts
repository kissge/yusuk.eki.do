const monitor = document.querySelector('.monitor.developer');
const words = document.querySelector('html').outerHTML;
let i = 0;
setInterval(() => {
  monitor.textContent = words.slice(0, i);
  i = (i + 1) % words.length;
  monitor.scrollBy(0, 10000);
}, 10);
