const argMinIndex = <T>(items: T[], key: (item: T) => number) => {
  const keys = items.map(key);
  const min = Math.min(...keys);
  return keys.indexOf(min);
};

const scrollEventListener = () => {
  const scrollY = window.scrollY;
  const closest = argMinIndex(
    Array.from(document.querySelectorAll<HTMLElement>('section:not(:nth-of-type(1))')),
    (section) => Math.abs(section.offsetTop - scrollY),
  );

  document.querySelectorAll<HTMLElement>('.monitor').forEach((m, i) => m.classList.toggle('hide', i !== closest));
};
window.addEventListener('scroll', scrollEventListener);
scrollEventListener();

import './developer';
import './designer';
