// Drag-and-Drop File Upload
const dropZone = document.getElementById('dropZone');
const fileList = document.getElementById('fileList');
const introText = document.getElementById('introText');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;

    if (files.length > 0) {
        displayFiles(files); // Display the dropped files
    }
});

function displayFiles(files) {
    // Remove the introductory text and icon after a file is dropped
    if (introText) {
        introText.style.display = 'none';
    }

    // Clear the previous file list


    Array.from(files).forEach(file => {
        const fileItem = document.createElement('p');
        fileItem.textContent = `📄 ${file.name}`;
        fileList.appendChild(fileItem);
    });
}
