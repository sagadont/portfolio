
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'red';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = 'hwb(291 1% 42%)';
  });
});
