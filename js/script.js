const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const applicationForm = document.getElementById("applicationForm");
const formStatus = document.getElementById("formStatus");
const faqQuestions = document.querySelectorAll(".faq-question");
const cursorGlow = document.querySelector(".cursor-glow");
const submitBtn = document.getElementById("submitBtn");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", () => {
  if (!scrollTopBtn) return;

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
      const icon = item.querySelector(".faq-question span");
      const questionBtn = item.querySelector(".faq-question");

      if (icon) icon.textContent = "+";
      if (questionBtn) questionBtn.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      currentItem.classList.add("active");
      const currentIcon = button.querySelector("span");
      if (currentIcon) currentIcon.textContent = "−";
      button.setAttribute("aria-expanded", "true");
    }
  });
});

if (applicationForm) {
  applicationForm.addEventListener("submit", (e) => {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const telegram = document.getElementById("telegram").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !telegram || !experience || !message) {
      e.preventDefault();
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    formStatus.textContent = "Sending your application...";
  });
}

document.addEventListener("mousemove", (e) => {
  if (cursorGlow && window.innerWidth > 768) {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }
});