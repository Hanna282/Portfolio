document.addEventListener('DOMContentLoaded', function() {
    const menuCheckbox = document.querySelector('#check'); 
    const menuMini = document.querySelector('.header-menu-mini'); 

    menuCheckbox.addEventListener('change', function() {
        if (menuCheckbox.checked) {
            menuMini.style.display = 'flex'; 
        } else {
            menuMini.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {

        if (!menuMini.contains(event.target) && !menuCheckbox.contains(event.target) && 
            !event.target.matches('.checkbtn')) {
            menuCheckbox.checked = false;  
            menuMini.style.display = 'none'; 
        }
    });

    document.querySelector('.checkbtn').addEventListener('click', function(event) {
        event.stopPropagation();  
    });

    const menuLinks = menuMini.querySelectorAll('a'); 
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuCheckbox.checked = false; 
            menuMini.style.display = 'none'; 
        });
    });
});