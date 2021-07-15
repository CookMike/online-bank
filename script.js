'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const uniqueInOrder = [1, 2, 2, 3, 3];
const unique = [];
if (typeof uniqueInOrder === Object) {
  const sep = (uniqueInOrder + '').split(',');
  console.log(sep);

  sep.forEach((x, i, _) => {
    if (sep[i] !== sep[i + 1]) {
      unique.push(x);
    }
  });
  console.log(unique);
}
// events

const h1 = document.querySelector('h1');
const h1Alert = e => {
  alert('addEventListener: Great! You found the heading!');
};

h1.addEventListener('mouseenter', h1Alert);

setTimeout(() => h1.removeEventListener('mouseenter', h1Alert), 3000);
