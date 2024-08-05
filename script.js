// your code here
function updateURL() {
            // Get the input values
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Construct the new URL with query parameters
            let url = 'https://localhost:8080/';
            const queryParams = [];

            if (name) {
                queryParams.push('name=' + encodeURIComponent(name));
            }

            if (year) {
                queryParams.push('year=' + encodeURIComponent(year));
            }

            if (queryParams.length > 0) {
                url += '?' + queryParams.join('&');
            }

            // Update the text of the h3 element
            document.getElementById('url').textContent = url;
        }

        // Attach the event listener to the button
        window.onload = function() {
            document.getElementById('button').addEventListener('click', function(event) {
                // Prevent the form from submitting
                event.preventDefault();
                updateURL();
            });
        };