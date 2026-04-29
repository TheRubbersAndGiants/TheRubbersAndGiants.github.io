document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('navMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  } else {
    console.error("Menu or Button ID not found. Check your HTML IDs!");
  }
});
