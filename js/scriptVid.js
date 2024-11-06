$(document).ready(function() {
    const $video = $('#courseVideo');
    const $taskButton = $('#taskButton');

    // Initially hide the task button
    $taskButton.hide();

    // Show the button when the video ends
    $video.on('ended', function() {
        $taskButton.show();
    });

    // Hide the button when the video is played again
    $video.on('play', function() {
        $taskButton.hide();
    });
});
