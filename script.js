document.getElementById("year").textContent = new Date().getFullYear();


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const sections = document.querySelectorAll('.animate');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85; // 85% viewport height
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
