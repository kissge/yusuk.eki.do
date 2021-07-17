const argMinIndex = <T>(items: T[], key: (item: T) => number) => {
  const keys = items.map(key);
  const min = Math.min(...keys);
  return keys.indexOf(min);
};

window.addEventListener('scroll', (event) => {
  const scrollY = window.scrollY;
  const closest = argMinIndex(
    Array.from(document.querySelectorAll<HTMLElement>('section:not(:nth-of-type(1))')),
    (section) => Math.abs(section.offsetTop - scrollY),
  );

  document.querySelectorAll<HTMLElement>('.monitor').forEach((m, i) => m.classList.toggle('hide', i !== closest));
});

const monitor = document.querySelector('.monitor.developer');
const words = document.querySelector('html').outerHTML;
let i = 0;
setInterval(() => {
  monitor.textContent = words.slice(0, i);
  i = (i + 1) % words.length;
  monitor.scrollBy(0, 10000);
}, 10);
