function toggleOtherTextBox(radioSelector, otherOptionSelector, otherTextBoxSelector) {
    const radios = document.querySelectorAll(radioSelector);
    const otherOption = document.querySelector(otherOptionSelector);
    const otherTextBox = document.querySelector(otherTextBoxSelector);

    function toggleTextBox() {
        otherTextBox.style.display = otherOption.checked ? 'block' : 'none';
    }

    radios.forEach(radio => {
        radio.addEventListener('change', toggleTextBox);
    });

    toggleTextBox();
}

toggleOtherTextBox('input[name="q1"]', '#Q1OtherOption', '#q1os');
toggleOtherTextBox('input[name="q3"]', '#Q3OtherOption', '#q3os');
toggleOtherTextBox('input[name="q5"]', '#Q5OtherOption', '#q5os');
toggleOtherTextBox('input[name="q7"]', '#Q7OtherOption', '#q7os');
