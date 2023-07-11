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

toggleOtherTextBox('input[name="q1"]', '#Q1OtherOption', '#showQ1OtherTextBox');
toggleOtherTextBox('input[name="q3"]', '#Q3OtherOption', '#showQ3OtherTextBox');
toggleOtherTextBox('input[name="q5"]', '#Q5OtherOption', '#showQ5OtherTextBox');
toggleOtherTextBox('input[name="q7"]', '#Q7OtherOption', '#showQ7OtherTextBox');
