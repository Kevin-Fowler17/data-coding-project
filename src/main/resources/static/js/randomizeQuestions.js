function randomizeColorRows() {
    var container = document.getElementsByClassName("optionsColor")[0];
    var radios = container.getElementsByTagName("input");
    var rows = [];

    // Extract the rows
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === "radio") {
            rows.push(radios[i].parentNode);
        }
    }

    // Shuffle the rows
    for (var i = rows.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = rows[i];
        rows[i] = rows[j];
        rows[j] = temp;
    }

    // Append the shuffled rows back to the container
    for (var i = 0; i < rows.length; i++) {
        container.appendChild(rows[i]);
    }
}

// Execute randomizeColorRows() on page load
window.onload = randomizeColorRows;