document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        // other options
        anchors: ['home', 'about', 'portfolio', 'contact'], // Ensure anchors match your sections
        scrollOverflow: true, // Enable scroll overflow for sections with more content
        scrollOverflowOptions: {
            scrollbars: true, // Show scrollbars when content overflows
        },
        autoScrolling: true, // Enable automatic scrolling
        afterLoad: function (origin, destination, direction) {
            // Add any custom code or checks after each section is loaded
        },
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

