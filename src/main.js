//Navbar
window.addEventListener("scroll", function() {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Portfolio
const portfolioModals = document.querySelector(".portfolio-model");
const imgCards = document.querySelector(".img-card");
const closeBtns = document.querySelector(".portfolio-close-btn");

let portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Contact Form
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });