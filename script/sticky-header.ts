let stuck = false;

const scrollListener = () => {
  if (stuck) {
    if ((window.innerHeight - 240) / 2 > window.scrollY) {
      document.body.classList.remove('header-stuck');
      stuck = false;
    }
  } else {
    if ((window.innerHeight - 240) / 2 + 120 <= window.scrollY) {
      document.body.classList.add('header-stuck');
      stuck = true;
    }
  }
};

window.addEventListener('resize', scrollListener);
window.addEventListener('scroll', scrollListener);
