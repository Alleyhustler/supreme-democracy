// You can add some cool interactive effects like parallax or mouse movement animations
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.cool-header');
    
    window.addEventListener('scroll', () => {
      let offset = window.scrollY;
      header.style.backgroundPositionY = offset * 0.5 + 'px';
    });
  });
  