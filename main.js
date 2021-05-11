// MENU
let btnMenu = document.querySelector('.header__buttonMenu')
let menu = document.querySelector('.header__nav__ul')
let iconMenu = document.querySelector('.header__iconMenu')
let header = document.querySelector('.header')
let headerNav = document.querySelector('.header__nav')

btnMenu.addEventListener('click', openMenu)

let desktop = window.matchMedia('(min-width: 1080px)')
let menuOpen = false
menuOpened(desktop)
desktop.addListener(menuOpened)
function menuOpened(x) {
    if(x.matches) {
        menu.style.display = 'block'
        headerNav.style.background = 'transparent'
        menuOpen = true
    } else {
        menuOpen = false
    }
}
function openMenu() {
    if (menuOpen == false) {
        menu.style.display = 'block'
        iconMenu.src = 'images/icon-close-menu.svg'
        menuOpen = true
        headerNav.style.background = 'linear-gradient(#000, transparent)'
        headerNav.style.zIndex = '6'
    } else {
        closeMenu()
    }
}

function closeMenu() {
    if (menuOpen == true) {
        menu.style.display = 'none'
        iconMenu.src = 'images/icon-hamburger.svg'
        headerNav.style.background = 'transparent'
        headerNav.style.zIndex = '0'
        menuOpen = false
    }
}

// BACK THIS PROJECT
let btnBackTP = document.querySelector('.project__btnBack')
let modal = document.querySelector('#modal__btp')
let closeModalBtn = document.querySelector('.modal_close')
let modalArticle = document.querySelectorAll('.modal__article')
let inpCheckModal = document.querySelectorAll('.check_modal')
let modalCompleted = document.querySelector('.modal_completed')

inpCheckModal.forEach(e => {
    e.checked = false
    let checked = false
    e.addEventListener('click', () => {
        let div = e.parentElement.parentElement
        let modalEnterPledge = div.querySelector('.modal__enterpledge')
        let btnContinue = div.querySelector('.modal__button')
        
        if (checked == false) {
            div.style.border = '2px solid hsl(176, 50%, 47%)'
            e.checked = true
            if (modalEnterPledge != null) {
                modalEnterPledge.style.display = 'block'
                btnContinue.addEventListener('click', openModalCompleted)
            }
            checked = true
            if (div.className == 'about__article__reward about__article_disabled') {
                e.checked = false
                div.style.border = '1px solid hsl(0, 0%, 76%)'
            }
        } else {
            checked = false
            e.checked = false
            div.style.border = '1px solid hsl(0, 0%, 76%)'
            if (modalEnterPledge != null) {
                modalEnterPledge.style.display = 'none'
            }
        }
    })
})

function openModalCompleted() {
    let completedButton = modalCompleted.querySelector('.button_default')
    modalCompleted.style.display = 'block'
    modal.style.display = 'none'
    completedButton.addEventListener('click', () => {
        modalCompleted.style.display = 'none'
    })
}

let openedModal = false

btnBackTP.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

function openModal() {
    if (openedModal == false) {
        modal.style.display = 'block'
        openedModal = true
    } else {
        closeModal()
    }
}

function closeModal() {
    if (openedModal == true) {
        modal.style.display = 'none'
        openedModal = false
    }
}

// BOOKMARKED
let bookmarked = document.querySelector('.project__bookmark')
let marked = false
let textBookmarked = bookmarked.querySelector('p')
let imgBookmarked = document.querySelector('.project__bookmark__button')

bookmarked.addEventListener('click', () => {
    if (marked == false) {
        textBookmarked.style.color = 'hsl(176, 72%, 28%)'
        marked = true
    } else {
        textBookmarked.style.color = 'hsl(0, 0%, 48%)'
        marked = false
    }
})
