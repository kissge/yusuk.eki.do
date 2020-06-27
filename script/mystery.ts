/// <reference path="xor.d.ts" />

import Sortable from 'sortablejs';
import xor from '@chunpu/xor';

window.addEventListener('DOMContentLoaded', () => {
  const UList = document.querySelector<HTMLUListElement>('header ul');

  const sortable = Sortable.create(UList, {
    onEnd() {
      const key = [...UList.children].map((li) => li.children[0].getAttribute('href').substr(17, 2)).join('');
      const decrypted = xor.decrypt('CQhHDyQVGhwRAgAGDwVBCws=', key);

      if (/^[a-z]+@[a-z]+\.[a-z]+\.[a-z]+$/.test(decrypted)) {
        sortable.destroy();

        document.querySelector('header').classList.add('fever');

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'mailto:' + decrypted;
        a.className = 'fas fa-envelope';
        li.appendChild(a);
        UList.appendChild(li);

        document.querySelector('.question').innerHTML = xor.decrypt(
          'PQxdQkQ1ABqG6bcVAUwJABEHSkMLGRtPCRAOBkkBDgYISU8HAB4KHBdIEgEWUgIODQVuGhEfGgRKDEUKSggAUwYbEF8FTAcdAQ8TQQwYGx8XUwFMEBsGGxAMXE0HAwJADQdaBgoYQBsTDEsXWxgKFxBUCyZcSS4sQVFrRiFUSi5TTG9QQSlcSlxYC1sgSSpZQVEWRl1cSipRTBYiQVUpSiEvCyEnSVdeQhxcD1kEGxsUGgtQJUldKUFbaBoRHxoESgxFCkoIAE1aMnoUAQkbMlhGT10=',
          key,
        );

        gtag('event', 'fever');
      }
    },
  });
});
