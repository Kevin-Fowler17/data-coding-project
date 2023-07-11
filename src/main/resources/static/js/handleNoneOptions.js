function uncheckOtherResponsesIfNone(noneOptionID, radioSelector, noneOptionSelector) {

    const noneCheckbox = document.getElementById(noneOptionID);
    const checkboxes = document.querySelectorAll(`${radioSelector}:not(${noneOptionSelector})`);


    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                noneCheckbox.checked = false;
            }
        });
    });

    noneCheckbox.addEventListener("change", function () {
        if (noneCheckbox.checked) {
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = false;
            });
        }
    });

}

uncheckOtherResponsesIfNone('Q3NoneOption', 'input[name="q3"]', '#Q3NoneOption');
uncheckOtherResponsesIfNone('Q7NoneOption', 'input[name="q7"]', '#Q7NoneOption');