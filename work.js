window.onscroll = function(){scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520){
        document.getElementById("nav-img").style.display="none";
        document.getElementById("nav-img").style.opacity="0";
        document.getElementById("text").style.display="block";
        document.getElementById("text").style.opacity="1";
    }
    else if(document.body.scrollTop < 520 || document.documentElement.scrollTop < 520){
        document.getElementById("nav-img").style.display="block";
        document.getElementById("nav-img").style.opacity="1";
        document.getElementById("text").style.display="none";
    }
}
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close");
let navMobile = document.getElementById("navMobile");
let hamBurger = document.getElementById("hamBurger");
console.log(menu,closeMenu,navMobile);
menu.addEventListener('click',()=>{
    menu.style.display="none";
    hamBurger.style.right=0;
    navMobile.style.right=0;
})
closeMenu.addEventListener('click',()=>{
    hamBurger.style.right="-30em";
    navMobile.style.right="-30em";
    menu.style.display="block";
})