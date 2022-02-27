const burgerButton = document.querySelector('.burger')
const headerMenu = document.querySelector('.navbar__menu')

function toggleMenu () {
    if (headerMenu.classList.contains('active')) {
        headerMenu.classList.remove('active')
    } else {
        headerMenu.classList.add('active')
    }
}
function hideMenu () {
    headerMenu.classList.remove('active')
}

burgerButton.addEventListener('click', toggleMenu)
headerMenu.addEventListener('click', hideMenu)
