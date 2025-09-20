
let navbarlinks = document.querySelectorAll('#navbar .scrollto')
window.addEventListener('scroll', function() {
  let position = window.scrollY + 200
  for(let i=0; i<navbarlinks.length; i++) {
    let navbarlink = navbarlinks[i]
    let section = document.querySelector(navbarlink.hash)
    if(position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  }
})


let backtotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
  if(window.scrollY > 100) {
    backtotop.classList.add('active')
  } else {
    backtotop.classList.remove('active')
  }
})


let mobileToggle = document.querySelector('.mobile-nav-toggle')
mobileToggle.addEventListener('click', function() {
  document.body.classList.toggle('mobile-nav-active')
  mobileToggle.classList.toggle('bi-list')
  mobileToggle.classList.toggle('bi-x')
})

let scrollLinks = document.querySelectorAll('.scrollto')
for(let i=0; i<scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', function(e) {
    if(document.querySelector(this.hash)) {
      e.preventDefault()
      if(document.body.classList.contains('mobile-nav-active')) {
        document.body.classList.remove('mobile-nav-active')
        mobileToggle.classList.toggle('bi-list')
        mobileToggle.classList.toggle('bi-x')
      }
      let elementPos = document.querySelector(this.hash).offsetTop
      window.scrollTo({ top: elementPos, behavior: 'smooth' })
    }
  })
}


window.onload = function() {
  if (window.location.hash) {
    let seccion = document.querySelector(window.location.hash)
    if (seccion) {
      window.scrollTo({ top: seccion.offsetTop, behavior: 'smooth' })
    }
  }
}


let typed = document.querySelector('.animated-text')
if(typed) {
  let typed_strings = typed.getAttribute('data-typed-items').split(',')
  new Typed('.animated-text', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  })
}
document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault();
  const form = event.target;
  const status = document.getElementById("form-status");

  try {
    let response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerText = "✅ Mensaje enviado con éxito";
      form.reset();
    } else {
      status.innerText = "❌ Hubo un error al enviar el mensaje";
    }
  } catch (error) {
    status.innerText = "⚠️ Error de conexión, intenta más tarde";
  }
});