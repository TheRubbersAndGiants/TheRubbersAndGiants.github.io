if (window.top !== window.self) {
    window.top.location.replace(window.self.location.href);
}
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('navMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});
