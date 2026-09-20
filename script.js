// ================= HEADER SCROLL =================

const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 25);
  });
}


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }

    const isExpanded = navLinks.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isExpanded);
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      const icon = menuBtn.querySelector("i");

      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
      }

      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


// ================= SCROLL REVEAL =================

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => {
    item.classList.add("show");
  });
}


// ================= TESTIMONIAL SLIDER =================

const testimonials = [
  {
    initials: "RS",
    quote:
      "CodeCraft delivered exactly what we needed. The design, development, and support were outstanding. Highly recommended!",
    name: "Rahul Sharma",
    role: "Business Owner"
  },
  {
    initials: "AK",
    quote:
      "The team understood our idea quickly and transformed it into a clean, modern digital experience.",
    name: "Amit Kumar",
    role: "Startup Founder"
  },
  {
    initials: "PS",
    quote:
      "Excellent communication, thoughtful design, and a smooth development process from start to finish.",
    name: "Priya Singh",
    role: "Product Manager"
  }
];

let currentTestimonial = 0;
let testimonialInterval;


// Testimonial Elements

const quoteElement = document.getElementById("quote");
const clientNameElement = document.getElementById("clientName");
const clientRoleElement = document.getElementById("clientRole");

const clientAvatarElement =
  document.getElementById("clientAvatar") ||
  document.querySelector(".client-avatar") ||
  document.querySelector(".avatar");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const testimonialDots = document.querySelectorAll(
  ".testimonial-dots .dot"
);


// Show Testimonial

function showTestimonial(index) {
  if (!testimonials.length) return;

  const testimonial = testimonials[index];

  if (quoteElement) {
    quoteElement.textContent = `“${testimonial.quote}”`;
  }

  if (clientNameElement) {
    clientNameElement.textContent = testimonial.name;
  }

  if (clientRoleElement) {
    clientRoleElement.textContent = testimonial.role;
  }

  if (clientAvatarElement) {
    clientAvatarElement.textContent = testimonial.initials;
  }

  // Update Active Dot

  testimonialDots.forEach((dot, dotIndex) => {
    dot.classList.toggle(
      "active",
      dotIndex === index
    );

    dot.setAttribute(
      "aria-current",
      dotIndex === index ? "true" : "false"
    );
  });
}


// Next Testimonial

function nextTestimonial() {
  currentTestimonial =
    (currentTestimonial + 1) % testimonials.length;

  showTestimonial(currentTestimonial);
}


// Previous Testimonial

function previousTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) %
    testimonials.length;

  showTestimonial(currentTestimonial);
}


// Button Events

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextTestimonial();
    restartTestimonialAutoSlide();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    previousTestimonial();
    restartTestimonialAutoSlide();
  });
}


// Dot Navigation

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index;

    showTestimonial(currentTestimonial);
    restartTestimonialAutoSlide();
  });
});


// Auto Slide

function startTestimonialAutoSlide() {
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 6000);
}

function stopTestimonialAutoSlide() {
  clearInterval(testimonialInterval);
}

function restartTestimonialAutoSlide() {
  stopTestimonialAutoSlide();
  startTestimonialAutoSlide();
}


// Pause Auto Slide on Hover

const testimonialSlider =
  document.querySelector(".testimonial-slider");

if (testimonialSlider) {
  testimonialSlider.addEventListener(
    "mouseenter",
    stopTestimonialAutoSlide
  );

  testimonialSlider.addEventListener(
    "mouseleave",
    startTestimonialAutoSlide
  );
}


// Initialize Testimonials

if (
  quoteElement ||
  clientNameElement ||
  clientRoleElement ||
  clientAvatarElement
) {
  showTestimonial(currentTestimonial);
  startTestimonialAutoSlide();
}


// ================= AUTO YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ================= ACTIVE NAV =================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navigationLinks.forEach(link => {
    const href = link.getAttribute("href");

    link.classList.toggle(
      "active",
      href === `#${currentSection}`
    );
  });
}

window.addEventListener(
  "scroll",
  updateActiveNavigation
);

updateActiveNavigation();


// ================= NAV ANCHOR OFFSET =================

document
  .querySelectorAll(".nav-links a, .nav-btn")
  .forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        !targetId.startsWith("#") ||
        targetId === "#"
      ) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerElement =
        document.getElementById("header");

      const headerHeight = headerElement
        ? headerElement.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        12;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });


// ================= KEYBOARD ACCESSIBILITY =================

document.addEventListener("keydown", event => {
  const testimonialSection =
    document.querySelector(".testimonial-slider");

  if (!testimonialSection) return;

  if (event.key === "ArrowRight") {
    nextTestimonial();
    restartTestimonialAutoSlide();
  }

  if (event.key === "ArrowLeft") {
    previousTestimonial();
    restartTestimonialAutoSlide();
  }
});