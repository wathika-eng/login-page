let signupBtn = document.getElementById('signupBtn')
let loginBtn = document.getElementById('loginBtn')
let mailfield = document.getElementById('mail')
let title = document.getElementById('title')

loginBtn.addEventListener('click', function (event) {
  event.preventDefault() // Prevent the default form submission

  // Change the URL without reloading the page
  history.pushState(null, null, '/login')

  mailfield.style.maxHeight = '0'
  title.innerHTML = 'Log-In'
  signupBtn.classList.add('disable')
  loginBtn.classList.remove('disable')
})

signupBtn.addEventListener('click', function (event) {
  event.preventDefault() // Prevent the default form submission

  // Change the URL without reloading the page
  history.pushState(null, null, '/signup')

  mailfield.style.maxHeight = '65px'
  title.innerHTML = 'Sign-Up'
  loginBtn.classList.add('disable')
  signupBtn.classList.remove('disable')
})
