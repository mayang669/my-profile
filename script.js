// Parallax scrolling effect
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');

  if (!sections.length) return;

  const windowHeight = window.innerHeight;
  
  sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      const distance = section.getBoundingClientRect().top;
      const speed = section.dataset.speed;


      if (distance < windowHeight) {

      section.style.backgroundPositionY = -distance * speed + 'px';

      }

  });
});
