document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        //licenseKey: 'gplv3-license',
        anchors: ['home', 'about', 'portfolio', 'resume', 'contact'],
        menu: '#menu',
        afterLoad: function (origin, destination, direction) {
            const activeMenuItem = document.querySelector('.menu-items a.active');
            if (activeMenuItem) {
                activeMenuItem.classList.remove('active');
            }
            const newActiveMenuItem = document.querySelector(`.menu-items a[href="#${destination.anchor}"]`);
            if (newActiveMenuItem) {
                newActiveMenuItem.classList.add('active');
            }
        }
    });

    // Handle click events on menu items
    const menuItems = document.querySelectorAll('.menu-items a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const activeMenuItem = document.querySelector('.menu-items a.active');
            if (activeMenuItem) {
                activeMenuItem.classList.remove('active');
            }
            item.classList.add('active');
        });
    });
});

