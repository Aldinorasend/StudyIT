const video = document.getElementById('courseVideo');
const taskButton = document.getElementById('taskButton');

// Initially hide the task button
taskButton.style.display = 'none';

// Show the button when the video ends
video.addEventListener('ended', () => {
    taskButton.style.display = 'block'; // Show the button when video ends
});

// Hide the button when the video is played again
video.addEventListener('play', () => {
    taskButton.style.display = 'none'; // Hide the button while video is playing
});
