document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.trim();
    const resultDiv = document.getElementById('result');

    // Sanitize user input to prevent injection
    const sanitizedInput = encodeURIComponent(searchInput);

    // Make an AJAX request
    const xhr = new XMLHttpRequest();
    const url = `superheroes.php?query=${sanitizedInput}`;
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            resultDiv.innerHTML = xhr.responseText;
        } else {
            resultDiv.innerHTML = `<p style="color: red;">Failed to load data.</p>`;
        }
    };

    xhr.onerror = function () {
        resultDiv.innerHTML = `<p style="color: red;">An error occurred while fetching data.</p>`;
    };

    xhr.send();
});


