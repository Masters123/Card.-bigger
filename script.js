const toggleButton = document.getElementByClassName('toggle-button')[0]
const navbareLinks = document.getElementByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbareLinks.classList.toggle('active')
})