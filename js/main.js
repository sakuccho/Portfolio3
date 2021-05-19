'use strict'

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('is-open')

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('is-open');
        }
      });
    });
  });
}
