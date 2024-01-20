import './card/card';
import './works/works';
import './gtag';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('[loading="lazy"]').forEach((el) => {
      el.removeAttribute('loading');
    });
  }, 2000);
});
