burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')




burger.addEventListener('click',()=>{
    rightNav.classList.toogle('v-class-resp');
    navlist.classList.toogle('v-class-resp');
    navbar.classList.toogle('h-nav-resp');
})