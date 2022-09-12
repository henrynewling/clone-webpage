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
            if(active) {
                active.classList.remove('active');
            }
            et.classList.add('active');

            let allContents = document.querySelectorAll('.program__descWrapper');

            for (let content of allContents) {
                if(content.getAttribute('data-number') == programBtn.getAttribute('data-number')) {
                    content.classList.add('show-desc')
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


const swiperContainer = document.querySelector('.swiper-container');
if(swiperContainer) {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider-btn-next',
          prevEl: '.slider-btn-prev',
        },
      
        
      });
}


// header on scroll
if(header) {
    
    window.onscroll = () => {
        header.classList.toggle("scroll", window.scrollY > 0);
        const logo1 = document.querySelector('.logo1')
        const logo2 = document.querySelector('.logo2')
        logo2.classList.toggle("show-logo", window.scrollY > 0)
        logo1.classList.toggle("hide-logo", window.scrollY > 0)
        
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

nextBtn1.onclick = () => {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');

    form2.style.left = 0
    form1.style.left = '-100%'
    menuBtn2.style.color = '#5c48d3';
    const svg = document.querySelector('.apply-menu-btn2 + svg > path')
    svg.style.fill = '#5c48d3'
}

nextBtn2.onclick = () => {
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    form3.style.left = 0
    form2.style.left = '-100%'
    menuBtn3.style.color = '#5c48d3';
}

prevBtn1.onclick = () => {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');

    form1.style.left = 0
    form2.style.left = '-100%'
    menuBtn2.style.color = '#dadada';
    const svg = document.querySelector('.apply-menu-btn2 + svg > path')
    svg.style.fill = '#dadada'
    
}

prevBtn3.onclick = () => {
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    form2.style.left = 0
    const scrWidth = screen.width;
    if(scrWidth <= 400) {
        form3.style.left = '163%'
    } else {
        form3.style.left = '-163%'
    }
    
    menuBtn3.style.color = '#dadada';
}

const allForms = document.querySelectorAll('form');

for(let form of allForms) {
    form.onsubmit = (e) => {
        e.preventDefault();
    }
}