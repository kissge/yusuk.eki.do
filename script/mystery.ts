import Sortable from 'sortablejs';
import xor from '@chunpu/xor';

const UList = document.querySelector<HTMLUListElement>('ul.icons');

const sortable = Sortable.create(UList, {
  onEnd() {
    const key = [...UList.children].map((li) => li.children[0].getAttribute('href').substr(17, 2)).join('');
    const decrypted = xor.decrypt('CQhHDyQVGhwRAgAGDwVBCws=', key);

    console.log({ key, decrypted });

    if (/^[a-z]+@[a-z]+\.[a-z]+\.[a-z]+$/.test(decrypted)) {
      sortable.destroy();

      document.querySelector('html').classList.add('fever');

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = 'mailto:' + decrypted;
      a.className = 'icon';
      a.innerHTML = 'Email';
      li.appendChild(a);
      UList.prepend(li);

      document.querySelector('.question').innerHTML = xor.decrypt(
        'PQxdQkQ1ABqG6bcVAUwJABEHSkMLGRtPCRAOBkkBDgYISU8HAB4KHBdIEgEWUgIODQVuGhEfGgRKDEUKSggAUwYbEF8FTAcdAQ8TQQwYGx8XUwFMEBsGGxAMXE0HAwJADQdaBgoYQBsTDEsXWxgKFxBUCyZcSS4sQVFrRiFUSi5TTG9QQSlcSlxYC1sgSSpZQVEWRl1cSipRTBYiQVUpSiEvCyEnSVdeQhxcD1kEGxsUGgtQJUldKUFbaBoRHxoESgxFCkoIAE1aMnoUAQkbMlhGT10=',
        key,
      );

      gtag('event', 'fever');
    }
  },
});
