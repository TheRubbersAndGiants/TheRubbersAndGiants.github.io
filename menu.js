const btn = document.getElementById('menuBtn');
const menu = document.getElementById('navMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
