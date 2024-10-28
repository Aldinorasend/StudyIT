// Fetch JSON data
fetch('../asset/json/dataTask.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Set title
        document.getElementById('json-title').textContent = data.title;

        // Set description
        document.getElementById('json-desc').textContent = data.desc;

        // Set task points
        const pointsContainer = document.getElementById('json-points');
        data.points.forEach(point => {
            const paragraph = document.createElement('p');
            paragraph.textContent = point;
            pointsContainer.appendChild(paragraph);
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
