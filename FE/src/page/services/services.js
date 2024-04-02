document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.menu-item a');
    const tabContents = document.querySelectorAll('.tabcontent');

    tabLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const tabId = this.getAttribute('data-tab');

            // Hide all tab content
            tabContents.forEach(function (content) {
                content.style.display = 'none';
            });

            // Remove 'active' class from all tab links
            tabLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            // Show the clicked tab content
            document.getElementById(tabId).style.display = 'block';

            // Add 'active' class to the clicked tab link
            this.classList.add('active');
        });
    });
});