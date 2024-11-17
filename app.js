document.getElementById('searchButton').addEventListener('click', function () {
    // Fetch superhero data
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Display the response (escaped HTML) in an alert
            alert(xhr.responseText);
        }
    };

    xhr.send();
});

