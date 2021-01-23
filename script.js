const myLinks = document.getElementById('my-links')

const toggleBar = document.getElementById('nav-toggle') 

const myMenus = document.querySelectorAll('.nav-link ')


toggleBar.addEventListener('click', () => {

    myLinks.classList.toggle('show')
    toggleBar.classList.toggle('menubarChange')
    
} )

function HandleMenus() {
    myMenus.forEach(myMenu => myMenu.classList.remove('current-page'))
    this.classList.add('current-page')

    myLinks.classList.toggle('show')
    toggleBar.classList.toggle('menubarChange')
}

myMenus.forEach((myMenu) => { myMenu.addEventListener('click', HandleMenus )})