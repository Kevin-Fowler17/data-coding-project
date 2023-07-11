document.querySelectorAll('input[name="q1"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        document.getElementById('showQ2').style.display = 'block';
    });
});
