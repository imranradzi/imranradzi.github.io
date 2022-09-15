const observer = new IntersectionObserver((items) => {
  items.forEach((item) => {
    console.log(item);
    if (item.isIntersecting) {
      item.target.classList.add('show');
    } 
  });
});

const sections = document.querySelectorAll('.animation');

sections.forEach((sec) => observer.observe(sec));

