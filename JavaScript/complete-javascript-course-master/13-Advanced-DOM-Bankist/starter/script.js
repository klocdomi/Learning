'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const h1 = document.querySelector('h1');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords); // coordinates of section 1 rectangle
  console.log(e.target.getBoundingClientRect()); // current distance to the button
  console.log(window.pageXOffset, window.pageYOffset); // current scroll position

  console.log(document.documentElement.clientHeight, document.documentElement.clientWidth); // dimension of the viewport

  // OLD SCHOOL
  //window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset); // current position + current scroll
  // window.scrollTo( {left: s1coords.left + window.pageXOffset , 
  //                   top: s1coords.top + window.pageYOffset, 
  //                   behavior: 'smooth'}); // upgraded smooth scroll

  // NEW SCHOOL
  //section1.scrollIntoView();
  section1.scrollIntoView({behavior: 'smooth'});
});

// h1.addEventListener('mouseenter', function(e) {
//   console.log('test');
// });

// h1.onmouseenter(function(e){
//   console.log('test');
// })

// Page Navigation

// Not very efficient solution - poor performance

// navLinks.forEach(function(btn) {btn.addEventListener('click', function(e) {
//   e.preventDefault();
//   const href = this.getAttribute('href');
//   document.querySelector(href).scrollIntoView({behavior:'smooth'});
// })});

// better solution = Event Delegation
// 1. Add event listener to common parent element
// 2. Deterimne what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView( {behavior: 'smooth'});
  }
});


// Tabbed component

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content => content.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // active content
  const id = clicked.getAttribute('data-tab');
  document.querySelector(`.operations__content--${id}`).classList.add('operations__content--active'); 
});

// Menu fade animation

const handleHover = function(e) {
  //console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el =>  { if (el !== link) el.style.opacity = this; });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function(e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function(e) {
//   handleHover(e, 1);
// });

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// Sticky navigation


// OLD WAY - low performance :
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(e) {
//   //console.log(window.scrollY);
  
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// NEW WAY :
// Intersection Observer API :

                      //array of thresholds
                               // ||
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, // null is for whole viewport
//   threshold: 0.1 // percentage of intersection when callback will be called
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px` // add offsets , only px unit possible
});

headerObserver.observe(header);


// Revealing elements on scroll

const allSections = document.querySelectorAll('.section');

const revealSection =  function(entries, observer) {  
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // turn off observing after all elements revealed
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));


// slider component

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotContainer = document.querySelector('.dots');
let currSlide = 1;
const maxSlide = slides.length;


//slider.style.overflow = 'visible';

const activateDot = function () {
  document.querySelectorAll('.dots__dot').forEach((dot,i) => {
   dot.classList.remove('dots__dot--active');
   if(currSlide == i) dot.classList.add('dots__dot--active');
 });
};

const moveSlide = function() {
  slides.forEach((slide, index) => slide.style.transform = `translateX(${(index-currSlide)*100}%)`);
  activateDot(); 
};

const moveRight = function () { 
    if (currSlide < maxSlide - 1) {
      currSlide++;

      moveSlide();
    }
};

const moveLeft = function () {
    if (currSlide > 0) {
      currSlide--;
      moveSlide();
    }
};

btnRight.addEventListener('click', moveRight);

btnLeft.addEventListener('click', moveLeft);

document.addEventListener('keydown', function(e) {
  e.key == 'ArrowLeft' && moveLeft();
  e.key == 'ArrowRight' && moveRight();
});

const createDots = function() {
  slides.forEach((_,i) => {
    //dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    const dot = document.createElement('button');
    dot.className = 'dots__dot';
    dot.dataset.slide = i;
    activateDot();
    dotContainer.appendChild(dot);
  });
};

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    currSlide = e.target.dataset.slide;
    moveSlide();
  }
});

const init = function () {
  currSlide = 1;
  createDots();
  activateDot();
  moveSlide();
};

init();

