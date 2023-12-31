document.querySelectorAll('.roles').forEach((el) => {
  el.innerHTML = el.innerHTML.replace(/(?<=、)/g, '<wbr>');
});
