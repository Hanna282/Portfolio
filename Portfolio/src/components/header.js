// Eventlistener for closing hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    
    const menuCheckbox = document.querySelector('#check'); 
    const menuMini = document.querySelector('.header-menu-mini'); 

    // Handles if the mini menu should be displayed or hidden
    menuCheckbox.addEventListener('change', function() {
        if (menuCheckbox.checked) {
            menuMini.style.display = 'flex'; 
        } else {
            menuMini.style.display = 'none';
        }
    });

    // Handles cklicks outside the mini menu or checkbox (to close the menu)
    document.addEventListener('click', function(event) {

        if (!menuMini.contains(event.target) && !menuCheckbox.contains(event.target) && !event.target.matches('.checkbtn')) {
            menuCheckbox.checked = false;  
            menuMini.style.display = 'none'; 
        }
    });

    // Prevents clicks on the hamburger menu (checkbox) from closing the menu if it is open
    document.querySelector('.checkbtn').addEventListener('click', function(event) {
        event.stopPropagation();  
    });

    //Closes the mini menu when a menu link item is clicked
    const menuLinks = menuMini.querySelectorAll('a'); 
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuCheckbox.checked = false; 
            menuMini.style.display = 'none'; 
        });
    });
});