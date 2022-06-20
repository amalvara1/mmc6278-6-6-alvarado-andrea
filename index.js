//set hamburger btn variables
var menu = document.querySelector('.menu');
var burgerBtn = document.querySelector('.hamburger-btn');
var menuItem = document.querySelector('.hamburger-menu');

//Open menu when clicking the hamburger btn
/*burgerBtn.onClick = function() {

    this.classList.toggle("open");
};*/

function openMenu(){
    if(menuItem.classList.add('show-menu')) {
        this.getAttribute('aria-expanded', 'true');
    } else {
        function closeMenu() {
            menuItem.classList.remove('show-menu')
            this.getAttribute('aria-expanded', 'false');
            
        }
    }
    //document.burgerBtn.setAttribute('aria-expanded', 'true');
    //this.getAttribute('aria-expanded', 'true');
    
    
    burgerBtn.addEventListener("click", closeMenu)
    
}

burgerBtn.addEventListener("click", openMenu);

    


