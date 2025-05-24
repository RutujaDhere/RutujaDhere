  /* ***************************************** Logo *********************************** */
  const letters = document.querySelectorAll('.logo span');

  letters.forEach(letter => {
    letter.addEventListener('mouseenter', () => {
      letter.classList.add('hovering');
      letter.style.animation = 'none'; // cancel bounce if re-entered fast
    });

    letter.addEventListener('mouseleave', () => {
      letter.classList.remove('hovering');
      letter.style.animation = 'bounceDown 0.4s ease-out';
      setTimeout(() => {
        letter.style.animation = ''; // clean up after animation
      }, 400);
    });
  });


    /* ***************XXX************************** Logo *****************XXX****************** */

var hamMenu = document.querySelector('#ham-menu');
var navbarNav = document.querySelector('.navbar-nav');

hamMenu.addEventListener('click', () =>{
  navbarNav.classList.toggle('active');
    })