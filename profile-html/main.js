const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));


document.querySelectorAll('.certi').forEach(el => observer.observe(el));
document.querySelectorAll('.projects').forEach(el => observer.observe(el));

function scrollCarousel(amount) {
    const carousel = document.getElementById('skillCarousel');
    carousel.scrollLeft += amount;
  }