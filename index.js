//set hamburger btn variables
var menu = document.querySelector('.menu');
var burgerBtn = document.querySelector('.hamburger-btn');
var menuItem = document.querySelector('.hamburger-menu');

//Open menu when clicking the hamburger btn
/*burgerBtn.onClick = function() {

    this.classList.toggle("open");
};*/

function openMenu(){
    menuItem.classList.add('show-menu')
    menuItem.ariaExpanded = 'true'

    function closeMenu() {
        menuItem.classList.remove('show-menu')
        menuItem.ariaExpanded = 'false'
    }
    burgerBtn.addEventListener("click", closeMenu)
    //menuItem.ariaExpanded = 'false'
}

burgerBtn.addEventListener("click", openMenu);


/*function closeMenu () {
    if (menuBtn.classList.contains('show-menu')) {
        openMenu()
        burgerBtn.ariaExpanded = 'true'
        //menuBtn.classList.remove('show-menu')
    } else {
        menuBtn.classList.remove('show-menu')
        burgerBtn.ariaExpanded = 'false'
    }
}*/
    


//set aria-expanded="true"

//close menu when click btn

//set aria-expanded="false"

//close menu when click outside menu

