// js eksternal

//untuk banenr slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    let currentSlide = 0;
    
  
    function updateSlider() {
      slides.style.transform = `translateX(-${currentSlide * 25}%)`;
      
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
    
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentSlide = index;
        updateSlider();
      });
    });
    
    
    leftArrow.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + 4) % 4;
      updateSlider();
    });
    
    rightArrow.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % 4;
      updateSlider();
    });
    
   
    setInterval(function() {
      currentSlide = (currentSlide + 1) % 4;
      updateSlider();
    }, 5000);

     // validasi form contact us
     const contactForm = document.getElementById('contactForm');
     const nameInput = document.getElementById('name');
     const emailInput = document.getElementById('email');
     const interestSelect = document.getElementById('interest');
 
     const nameGroup = document.getElementById('nameGroup');
     const emailGroup = document.getElementById('emailGroup');
     const interestGroup = document.getElementById('interestGroup');
 
     const formSuccess = document.querySelector('.form-success');
 
     
     function isValidEmail(email) {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email);
     }
 
     
     function validateName() {
         if (nameInput.value.trim() === '' || nameInput.value.trim().split(' ').length < 2) {
             nameGroup.classList.add('error');
             return false;
         } else {
             nameGroup.classList.remove('error');
             return true;
         }
     }
 
     function validateEmail() {
         if (!isValidEmail(emailInput.value.trim())) {
             emailGroup.classList.add('error');
             return false;
         } else {
             emailGroup.classList.remove('error');
             return true;
         }
     }
 
     function validateInterest() {
         if (interestSelect.value === '') {
             interestGroup.classList.add('error');
             return false;
         } else {
             interestGroup.classList.remove('error');
             return true;
         }
     }
 
     
     nameInput.addEventListener('blur', validateName);
     emailInput.addEventListener('blur', validateEmail);
     interestSelect.addEventListener('change', validateInterest);
 
    
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
 
         
         const isNameValid = validateName();
         const isEmailValid = validateEmail();
         const isInterestValid = validateInterest();
 
        
         if (isNameValid && isEmailValid && isInterestValid) {
             
             formSuccess.style.display = 'block';
             contactForm.reset();
 
             setTimeout(() => {
                 formSuccess.style.display = 'none';
             }, 5000);
         }
     });
});