const roleButtons = document.querySelectorAll('.role-selector');
const selectedRole = document.querySelector('.role__selected');

const programButtons = document.querySelectorAll('.program__menuBtn');

const viewStBtn = document.getElementById('view-students-btn');

const header = document.querySelector('.header');

const menuBtn = document.querySelector('.menu-btn');

const closeMenuBtn = document.querySelector('.close-menu-btn');

const nextBtn1 = document.getElementById('nextBtn1');

const nextBtn2 = document.getElementById('nextBtn2');

const prevBtn1 = document.getElementById('prevBtn1');

const prevBtn2 = document.getElementById('prevBtn2');

const prevBtn3 = document.getElementById('prevBtn3');

const menuBtn1 = document.querySelector('.apply-menu-btn1');
const menuBtn2 = document.querySelector('.apply-menu-btn2');
const menuBtn3 = document.querySelector('.apply-menu-btn3');

const carouselButtons = document.querySelectorAll('.carousel-menu-btn');

const subHeader = document.querySelector('.sub-header');

// roles dropdown implementations
if(roleButtons) {
    for (let roleBtn of roleButtons) {
        roleBtn.onclick = (e) => {
            const et = e.target;
            selectedRole.innerHTML = et.innerText
            const active = document.querySelector('.role-selector.active');
            console.log(active)
            if (active) {
                active.classList.remove('active');
            }
            et.classList.add('active');
    
            let allContent = document.querySelectorAll('.role__infoText');
    
            for(let content of allContent) {
                if(content.getAttribute('data-number') == roleBtn.getAttribute('data-number')) {
                    content.classList.add('show-info')
                } else {
                    content.classList.remove('show-info')
                }
            }
        }
    }
}

// program sections tabs implementations
if(programButtons) {
    for(let programBtn of programButtons) {
        programBtn.onclick = (e) => {
            
            const et = e.target;
            console.log(et)
            const active = document.querySelector('.program__menuBtn.active');
            const dropIcon = et.querySelector('.btn-ctx-2')
            if(dropIcon) {
                dropIcon.classList.toggle('rotate-90')
            }
            
            if(active) {
                active.classList.remove('active');
            }
            et.classList.add('active');

            let allContents = document.querySelectorAll('.program__descWrapper');
            const scrWidth = screen.width

            for (let content of allContents) {
                if(content.getAttribute('data-number') == programBtn.getAttribute('data-number')) {
                    if(scrWidth <= 600) {
                        content.classList.toggle('show-desc')
                    } else {
                        content.classList.add('show-desc')
                    }
                    
                } else {
                        content.classList.remove('show-desc')
                   
                    
                }
            }
        }
    }
}


// expand/hide students list
if(viewStBtn) {
    viewStBtn.onclick = () => {
        const remainStudents = document.querySelectorAll('.student__overlay ~ a')
        const grayArea = document.querySelector('.student__overlay')
        btnAtr = viewStBtn.getAttribute('data-show');
        if(btnAtr == 'false') {
            viewStBtn.innerHTML = `<span>Voir moins</span>`
            
            for(let student of remainStudents) {
                student.style.display = 'flex'

            }
            viewStBtn.setAttribute('data-show','true')
            grayArea.classList.add('hide-gray')
        } else {
            viewStBtn.innerHTML = `<span>Voir plus d'élèves</span>`
            
            for(let student of remainStudents) {
                student.style.display = 'none'
            }
            viewStBtn.setAttribute('data-show','false')
            grayArea.classList.remove('hide-gray')
        }
        
        
    } 
}


const swiperContainer = document.querySelector('.swipe-carousel-1');
if(swiperContainer) {
    const swiper = new Swiper('.swipe-carousel-1', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider-btn-next',
          prevEl: '.slider-btn-prev',
        },
      
        
      });
}
const swiperContainer2 = document.querySelector('.swipe-carousel-2');
if(swiperContainer2) {
    const swiper = new Swiper('.swipe-carousel-2', {
        // Optional parameters
        slidesPerView: 3,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
      });
}


// header on scroll
if(header) {
    
    window.onscroll = () => {
        header.classList.toggle("scroll", window.scrollY > 0);
        const logo1 = document.querySelector('.logo1')
        const logo2 = document.querySelector('.logo2')
        if(logo2) {
            logo2.classList.toggle("show-logo", window.scrollY > 0)
            logo1.classList.toggle("hide-logo", window.scrollY > 0)
        }
        
        
        if(subHeader) {
            subHeader.classList.toggle("show-subHeader", window.scrollY > 10)
        }
        
    }
}

// mobile navigation

menuBtn.onclick = () => {
    const mobileMenu = document.querySelector('.hamburger-menu');
    mobileMenu.classList.add('show-menu');
}

closeMenuBtn.onclick = () => {
    const mobileMenu = document.querySelector('.hamburger-menu');
    mobileMenu.classList.remove('show-menu');
}

const navLinks = document.querySelectorAll('.hamburger-menu .nav__link');

for(navLink of navLinks) {
    navLinks.onclick = () => {
        const mobileMenu = document.querySelector('.hamburger-menu');
        mobileMenu.classList.remove('show-menu');
    }
}


// multi step form 

if(nextBtn1) {
    nextBtn1.onclick = () => {
        const form1 = document.getElementById('form1');
        const form2 = document.getElementById('form2');
    
        form2.style.left = 0
        form1.style.left = '-100%'
        menuBtn2.style.color = '#5c48d3';
        const svg = document.querySelector('.apply-menu-btn2 + svg > path')
        svg.style.fill = '#5c48d3'
    }
}


if(nextBtn2) {
    nextBtn2.onclick = () => {
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('form3');
    
        form3.style.left = 0
        form2.style.left = '-100%'
        menuBtn3.style.color = '#5c48d3';
    }
}


if(prevBtn1) {
    prevBtn1.onclick = () => {
        const form1 = document.getElementById('form1');
        const form2 = document.getElementById('form2');
    
        form1.style.left = 0
        form2.style.left = '-100%'
        menuBtn2.style.color = '#dadada';
        const svg = document.querySelector('.apply-menu-btn2 + svg > path')
        svg.style.fill = '#dadada'
        
    }
}



if(prevBtn3) {
    prevBtn3.onclick = () => {
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('form3');
    
        form2.style.left = 0
        const scrWidth = screen.width;
        if(scrWidth <= 460) {
            form3.style.left = '163%'
        } else {
            form3.style.left = '-163%'
        }
        
        menuBtn3.style.color = '#dadada';
    }
}




const allForms = document.querySelectorAll('form');

if(allForms) {
    for(let form of allForms) {
        form.onsubmit = (e) => {
            e.preventDefault();
        }
    }
}


if(carouselButtons) {
    for(btn of carouselButtons) {
        btn.onclick = (e) => {
            e.stopPropagation();
            const et = e.target;
            const active = document.querySelector('.carousel-menu-btn.active')
            console.log(et)


            if(active) {
                active.classList.remove('active');
            }
            et.classList.add('active');

            let allContent = document.querySelectorAll('.project-information');
    
            for(let content of allContent) {
                
                if(content.getAttribute('data-number') == et.getAttribute('data-number')) {
                    
                    console.log(btn.getAttribute('data-number'))
                    content.classList.add('show-info')
                } else {
                    content.classList.remove('show-info')
                }
            }

            let videoContent = document.querySelectorAll('.project-videos');
    
            for(let content of videoContent) {
                if(content.getAttribute('data-number') == et.getAttribute('data-number')) {
                    content.classList.add('show-video')
                } else {
                    content.classList.remove('show-video')
                }
            }



        }
    }
}