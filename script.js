fetch('/getPhrases')
    .then(response => response.json())
    .then(phrases => {
        // Shuffle the phrases array
        phrases.sort(() => Math.random() - 0.5);

        // Get the table element
        var table = document.getElementById('squareTable');

        // Populate the table with rows and cells
        var index = 0;
        for (var i = 0; i < 5; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 5; j++) {
                var cell = row.insertCell();
                cell.textContent = phrases[index % phrases.length];
                index++;
                // Add click event listener to each cell
                cell.addEventListener('click', function() {
                    if (this.style.backgroundColor === 'green') {
                        this.style.backgroundColor = 'white';
                    } else {
                        this.style.backgroundColor = 'green';
                    }
                });
            }
        }
    })
    .catch(error => console.error('Error fetching phrases:', error));
