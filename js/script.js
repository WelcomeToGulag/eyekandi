const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const applicationForm = document.getElementById("applicationForm");
const formStatus = document.getElementById("formStatus");
const faqQuestions = document.querySelectorAll(".faq-question");
const cursorGlow = document.querySelector(".cursor-glow");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    scrollTopBtn.style.display = "grid";
    scrollTopBtn.style.placeItems = "center";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;
    const isActive = currentItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq-question span").textContent = "+";
    });

    if (!isActive) {
      currentItem.classList.add("active");
      button.querySelector("span").textContent = "−";
    }
  });
});

if (applicationForm) {
  applicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const telegram = document.getElementById("telegram").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !telegram || !experience || !message) {
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    formStatus.textContent = "Application submitted successfully. Your team can now connect this form to email or a backend.";
    applicationForm.reset();
  });
}

document.addEventListener("mousemove", (e) => {
  if (cursorGlow) {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }
});