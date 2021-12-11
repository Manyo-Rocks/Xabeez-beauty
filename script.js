


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
//take the navbar links and acces the different classes on it(use classlist)then toggle the active class(meaning if the active class exist it will add it and if it dosesnt exist it will remove it)//
