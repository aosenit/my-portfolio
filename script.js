const myLinks = document.querySelector('.my-links')

const toggleBar = document.getElementById('nav-toggle') 

const myMenus = document.querySelectorAll('.nav-link')


toggleBar.addEventListener('click', () => {

    myLinks.classList.toggle('show')
   
    
} )

function HandleMenus() {
    myMenus.forEach(myMenu => myMenu.classList.remove('current-page'))
    this.classList.add('current-page')

    myLinks.classList.toggle('show')
  
}

myMenus.forEach((myMenu) => { myMenu.addEventListener('click', HandleMenus )})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

const ft = ScrollReveal({
    origin: 'left',
    distance: '800px',
    duration: 2000,
    reset: true
});

/*.............OTHER ANIMATIONS..........*/
var tl = gsap.timeline();

tl.from(".bounce", {duration: 2.5, ease: "bounce.out", y: -500 });
tl.from(".footer__title", {duration: 1, x: 200, scale: 0.2});


ft.reveal(".slide", {delay: 200}); 

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 


/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 800});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 900}); 
sr.reveal('.footer__social',{interval: 900});

