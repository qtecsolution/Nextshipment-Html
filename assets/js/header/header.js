const header = document.querySelector('.header');
 
window.addEventListener('scroll', headerscrolled);

function headerscrolled() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}