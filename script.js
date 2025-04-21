// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: "smooth",
          })
        }
      })
    })
  
    // Add background to navbar on scroll
    const nav = document.querySelector("nav")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
        nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
        nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    })
  
    // Feature cards fade-up animation
    const featureCards = document.querySelectorAll(".feature-card")
  
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target
          const delay = card.getAttribute("data-delay") || 0
  
          setTimeout(() => {
            card.style.animation = `fadeUp 0.8s ease forwards`
            card.classList.add("visible")
          }, delay)
  
          observer.unobserve(card)
        }
      })
    }, observerOptions)
  
    featureCards.forEach((card) => {
      observer.observe(card)
    })
  
    // Set the hero background image to the provided image
    const hero = document.querySelector(".hero")
    hero.style.backgroundImage = "url('medical-bg.jpg')"
  })
  const toggleBtn = document.getElementById('theme-icon');
  const body = document.body;

  // Load saved mode on page load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.classList.toggle('fa-moon');
    toggleBtn.classList.toggle('fa-sun');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });