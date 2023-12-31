const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
const direction = { current: { x: -30, y: 30 }, target: { x: 0, y: 0 } };
const card = document.getElementById('card')!;
const cardShadow = createShadow(card);

if (!isTouchDevice) {
  document.getElementById('container')!.addEventListener('mousemove', (e) => {
    const { x, y, height, width } = card.getBoundingClientRect();
    direction.target = {
      x: saturate2(-(e.clientY - y - height / 2) / 20),
      y: saturate2((e.clientX - x - width / 2) / 40),
    };
  });
}

setTimeout(animate, 100);

function createShadow(card: HTMLElement) {
  const cardShadow = card.cloneNode(true) as HTMLElement;
  cardShadow.id = 'card-shadow';

  cardShadow.querySelectorAll('a').forEach((a) => {
    a.setAttribute('tabindex', '-1');
  });

  const email = cardShadow.querySelector('.secret-email-address')!;
  email.textContent =
    (email.previousSibling! as HTMLImageElement)
      .getAttribute('src')!
      .split(/[./-]+/)[1]
      .toLowerCase() + email.textContent;

  card.insertAdjacentElement('beforebegin', cardShadow);

  return cardShadow;
}

function animate() {
  if (isTouchDevice) {
    const now = Date.now();
    direction.current.x = Math.sin(now / 2000) * 20;
    direction.current.y = Math.cos(now / 2000) * 20;
  } else {
    direction.current.x += (direction.target.x - direction.current.x) * 0.05;
    direction.current.y += (direction.target.y - direction.current.y) * 0.05;
  }

  const transform = `perspective(10000px) rotateX(${f(direction.current.x)}deg) rotateY(${f(direction.current.y)}deg)`;
  const z = saturate(Math.max(Math.abs(direction.current.x), Math.abs(direction.current.y)));

  card.style.transform = `${transform} translateZ(${f(z)}px)`;
  cardShadow.style.transform = `${transform}  translateZ(-50px) `;

  window.requestAnimationFrame(animate);
}

function saturate(x: number) {
  return (200 * x) / (x + 100);
}

function saturate2(x: number) {
  return (80 * x) / (Math.abs(x) + 30);
}

function f(x: number, unit: number = 10000) {
  return Math.floor(x * unit) / unit;
}
