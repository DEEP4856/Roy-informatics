// crousel description effect
document.addEventListener('DOMContentLoaded', function () {
    const caption = document.querySelector('.carousel-caption');
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          caption.classList.add('visible'); // Show the caption with animation
        } else {
          caption.classList.remove('visible'); // Hide the caption when out of view
        }
      });
    });
  
    observer.observe(caption); // Watch for when the caption enters the viewport
  });
  
// crousel description effect