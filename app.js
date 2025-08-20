// ------------------ SLIDER ------------------
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
if (slides.length > 0) {
  const totalSlides = slides.length;

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    document.querySelector('.slides').style.transform =
      `translateX(-${currentSlide * (100 / totalSlides)}%)`;
  }

  setInterval(() => changeSlide(1), 5000);
}

// ------------------ MODAL (Artwork Images) ------------------
const images = document.querySelectorAll(".artwork-image");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

if (images.length > 0 && modal && modalImg && closeModal) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      document.body.style.overflow = "hidden"; // disable scroll
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = ""; // enable scroll back
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}

// ------------------ MOBILE MENU ------------------
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

if (hamburger && mobileMenu && closeBtn) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}
