// Meadowbrook Dental — shared page behavior

// Footer year
var yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()

// Mobile nav
var toggle = document.getElementById('nav-toggle')
var nav = document.getElementById('site-nav')
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open')
    toggle.classList.toggle('open')
  })
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open')
      toggle.classList.remove('open')
    }
  })
}

// Scroll reveal
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)
document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el) })

// Demo booking form — no backend yet, show a confirmation state
var form = document.getElementById('booking-form')
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    form.classList.add('sent')
    form.innerHTML =
      '<p class="sent-msg">Thank you — we’ll be in touch within the hour to find you a time. 🦷</p>'
  })
}
