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
      
      // Update active dot
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
});