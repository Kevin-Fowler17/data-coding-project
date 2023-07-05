function randomizeOptions() {
    var optionsContainer = document.getElementById("optionsContainer");
    var options = optionsContainer.children;
    var randomOptions = [];

    // Copy the options into an array
    for (var i = 0; i < options.length; i++) {
        randomOptions.push(options[i]);
    }

    // Randomize the array
    randomOptions.sort(function() {
        return 0.5 - Math.random();
    });

    // Append the randomized options back to the container
    for (var i = 0; i < randomOptions.length; i++) {
        optionsContainer.appendChild(randomOptions[i]);
    }
}
</script>