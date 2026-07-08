// ===== DATE & TIME DISPLAY =====
const datetimeEl = document.getElementById("datetime");
if (datetimeEl) {
  const now = new Date();
  datetimeEl.textContent = "Date & Time: " + now.toLocaleString();
}

// ===== SCROLL TO TOP BUTTON =====
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== FADE-IN ANIMATION ON SCROLL =====
const fades = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fades.forEach((fade) => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add("visible");
    }
  });
});

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill all fields before submitting.");
    } else {
      alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    }
  });
}
