const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const applicationForm = document.getElementById("applicationForm");
const formStatus = document.getElementById("formStatus");
const faqQuestions = document.querySelectorAll(".faq-question");
const cursorGlow = document.querySelector(".cursor-glow");
const submitBtn = document.getElementById("submitBtn");
const year = document.getElementById("year");
const dynamicSubject = document.getElementById("dynamicSubject");
const submissionRef = document.getElementById("submissionRef");

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
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const telegram = document.getElementById("telegram");
    const experience = document.getElementById("experience");
    const message = document.getElementById("message");

    if (!fullName || !email || !telegram || !experience || !message) {
      return;
    }

    if (
      !fullName.value.trim() ||
      !email.value.trim() ||
      !telegram.value.trim() ||
      !experience.value.trim() ||
      !message.value.trim()
    ) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = "Please complete all required fields.";
      }
      return;
    }

    const now = new Date();
    const timestamp =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0") +
      "-" +
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0");

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const ref = `EK-${timestamp}-${randomId}`;

    if (dynamicSubject) {
      dynamicSubject.value = `Eyekandi Application | ${fullName.value.trim()} | ${ref}`;
    }

    if (submissionRef) {
      submissionRef.value = ref;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    if (formStatus) {
      formStatus.textContent = "Sending your application...";
    }
  });
}

document.addEventListener("mousemove", (e) => {
  if (cursorGlow && window.innerWidth > 768) {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }
});