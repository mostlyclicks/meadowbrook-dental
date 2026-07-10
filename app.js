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

// Booking form — submits to RefreshWeb's shared contact endpoint
var form = document.getElementById('booking-form')
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    var data = new FormData(form)
    fetch('https://refreshweb.io/api/client-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId: '8ccecd78-c1f2-4962-97bf-f3a143de7f73',
        name: data.get('name'),
        contact: data.get('contact'),
        message: data.get('type'),
        page: location.pathname,
        hp: data.get('hp'),
      }),
    }).catch(function () {})
    form.classList.add('sent')
    form.innerHTML =
      '<p class="sent-msg">Thank you — we’ll be in touch within the hour to find you a time. 🦷</p>'
  })
}
