'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);
// const openModal = function () {
//   // console.log('Butten Clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// const closeModal = function () {
//   // console.log('Butten Clicked');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
