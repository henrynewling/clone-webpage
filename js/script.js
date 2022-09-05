const roleButtons = document.querySelectorAll('.role-selector');
const selectedRole = document.querySelector('.role__selected');

const programButtons = document.querySelectorAll('.program__menuBtn');

const viewStBtn = document.getElementById('view-students-btn');


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


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-btn-next',
      prevEl: '.slider-btn-prev',
    },
  
    
  });
