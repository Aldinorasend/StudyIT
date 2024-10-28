$(document).ready(function() {
    // Load the course data from the JSON file using AJAX
    $.ajax({
        url: '/asset/json/datacourse.json', // URL of the JSON file
        dataType: 'json', // Specify the data type
        success: function(data) {
            const courses = data.course; // Get the array of courses
            const container = $('#course-container'); // Select the container

            $.each(courses, function(index, course) {
                // Clone the template card
                const card = $('#course-template').clone();
                card.css('display', 'block'); // Show the cloned card

                // Set the course image and details
                card.find('.card-img-top').attr('src', course.image);
                card.find('.card-title').text(`${course.title}`);
                card.find('.card-level').text(`(${course.level})`);
                card.find('.date-card').text(`${course.date}`);

                // Append the card to the container
                container.append(card);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error loading the course data:', error);
        }
    });
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // Check if the click is outside the sidebar and the hamburger
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active'); // Close the sidebar
    }
});g
