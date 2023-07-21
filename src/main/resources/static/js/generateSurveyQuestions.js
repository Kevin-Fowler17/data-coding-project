"use strict";

(function () {

    const displayQ1 = document.getElementsByClassName("q1")[0];
    const displayQ2 = document.getElementsByClassName("q2")[0];
    const displayQ3 = document.getElementsByClassName("q3")[0];
    const displayQ4 = document.getElementsByClassName("q4")[0];
    const displayQ5 = document.getElementsByClassName("q5")[0];
    const displayQ6 = document.getElementsByClassName("q6")[0];
    const displayQ7 = document.getElementsByClassName("q7")[0];
    const displayQ8 = document.getElementsByClassName("q8")[0];
    const displayQ9 = document.getElementsByClassName("q9")[0];
    const displayQ10 = document.getElementsByClassName("q10")[0];

    // Arrays to store the variable names for each question
    let q1Layout = [];
    let q2Layout = [];
    let q3Layout = [];
    let q4Layout = [];
    let q5Layout = [];
    let q6Layout = [];
    let q7Layout = [];
    let q8Layout = [];
    let q9Layout = [];
    let q10Layout = [];

    // Arrays to store the question text and answer options for each question
    let questionText = [
        {'value': 1, 'label': 'What is your favorite color?'},
        {'value': 2, 'label': 'Why is "insert color" your favorite color?'},
        {'value': 3, 'label': 'What other colors do you like?'},
        {'value': 4, 'label': 'Rate the following colors ... '},
        {'value': 5, 'label': 'What is your favorite sport?'},
        {'value': 6, 'label': 'Why is "insert sport" your favorite sport?'},
        {'value': 7, 'label': 'What other sports do you like?'},
        {'value': 8, 'label': 'What is your age?'},
        {'value': 9, 'label': 'What is your gender?'},
        {'value': 10, 'label': 'What is your income?'}
    ]

    let colorArray = [
        {'value': 1, 'label': 'Blue'},
        {'value': 2, 'label': 'Green'},
        {'value': 3, 'label': 'Indigo'},
        {'value': 4, 'label': 'Orange'},
        {'value': 5, 'label': 'Red'},
        {'value': 6, 'label': 'Violet'},
        {'value': 7, 'label': 'Yellow'}
    ];

    let ratingArray = [
        {'value': 0, 'label': ''},
        {'value': 1, 'label': 'A'},
        {'value': 2, 'label': 'B'},
        {'value': 3, 'label': 'C'},
        {'value': 4, 'label': 'D'},
        {'value': 5, 'label': 'E'}
    ];

    let sportsArray = [
        {'value': 1, 'label': 'Basebell'},
        {'value': 2, 'label': 'Basketball'},
        {'value': 3, 'label': 'Boxing'},
        {'value': 4, 'label': 'Football'},
        {'value': 5, 'label': 'Golf'},
        {'value': 6, 'label': 'Hockey'},
        {'value': 7, 'label': 'Soccer'},
        {'value': 8, 'label': 'Tennis'},
        {'value': 9, 'label': 'Volleyball'}
    ];

    let genderArray = [
        {'value': 1, 'label': 'Male'},
        {'value': 2, 'label': 'Female'}
    ];

    let incomeArray = [
        {'value': 1, 'label': 'Less that $20,000'},
        {'value': 2, 'label': '$20,000 to $34,999'},
        {'value': 3, 'label': '$35,000 to $49,999'},
        {'value': 4, 'label': '$50,000 to $74,999'},
        {'value': 5, 'label': '$75,000 to $99,999'},
        {'value': 6, 'label': '$100,000 or more'}
    ];

    let workingArray = [];
    let workingRowArray = [];
    let workingColumnArray = [];

    // generate survey questions
    renderQ1(0)
    renderQ2(1)
    renderQ3(2)
    renderQ4(3)
    renderQ5(4)
    renderQ6(5)
    renderQ7(6)
    renderQ8(7)
    renderQ9(8)
    renderQ10(9)

    function renderQ1(questionArrayPosition) {
        generateHTMLLayoutForSRandMR(q1Layout, colorArray, true,false, false);
        customizeHTMLLayoutForSRandMR(q1Layout, questionArrayPosition, workingArray,true);
        addInputBoxForOther(q1Layout);
        appendElementsToDocForSRandMR(q1Layout, workingArray, displayQ1);
    }

    function renderQ2(questionArrayPosition) {
        generateHTMLLayoutForOpenEnd(q2Layout);
        customizeHTMLLayoutForOpenEnd(q2Layout, questionArrayPosition);
        appendElementsToDocForOpenEnd(q2Layout, displayQ2);
    }

    function renderQ3(questionArrayPosition) {
        generateHTMLLayoutForSRandMR(q3Layout, colorArray, true, true, false);
        customizeHTMLLayoutForSRandMR(q3Layout, questionArrayPosition, workingArray,false);
        addInputBoxForOther(q3Layout);
        appendElementsToDocForSRandMR(q3Layout, workingArray, displayQ3);
    }

    function renderQ4(questionArrayPosition) {
        generateHTMLLayoutForRating(q4Layout, colorArray, ratingArray, true);
        customizeHTMLLayoutForRating(q4Layout, questionArrayPosition, workingRowArray, workingColumnArray);
        // appendElementsToDocForRating(q4Layout, workingArray, displayQ4);
        console.log(q4Layout)
    }

    function renderQ5(questionArrayPosition) {
        generateHTMLLayoutForSRandMR(q5Layout, sportsArray,true,false,false);
        customizeHTMLLayoutForSRandMR(q5Layout, questionArrayPosition, workingArray,true);
        addInputBoxForOther(q5Layout);
        appendElementsToDocForSRandMR(q5Layout, workingArray, displayQ5);
    }

    function renderQ6(questionArrayPosition) {
        generateHTMLLayoutForOpenEnd(q6Layout);
        customizeHTMLLayoutForOpenEnd(q6Layout, questionArrayPosition);
        appendElementsToDocForOpenEnd(q6Layout, displayQ6);
    }

    function renderQ7(questionArrayPosition) {
        generateHTMLLayoutForSRandMR(q7Layout, sportsArray, true, true, false);
        customizeHTMLLayoutForSRandMR(q7Layout, questionArrayPosition, workingArray,false);
        addInputBoxForOther(q7Layout);
        appendElementsToDocForSRandMR(q7Layout, workingArray, displayQ7);
    }

    function renderQ8(questionArrayPosition) {
        generateHTMLLayoutForNumeric(q8Layout);
        customizeHTMLLayoutForNumeric(q8Layout, questionArrayPosition);
        appendElementsToDocForOpenEnd(q8Layout, displayQ8);
    }

    function renderQ9(questionArrayPosition) {
        generateHTMLLayoutForSRandMR(q9Layout, genderArray,false,false,false);
        customizeHTMLLayoutForSRandMR(q9Layout, questionArrayPosition, workingArray,true);
        addInputBoxForOther(q9Layout);
        appendElementsToDocForSRandMR(q9Layout, workingArray, displayQ9);
    }

    function renderQ10(questionArrayPosition) {
        generateHTMLLayoutForSRandMR(q10Layout, incomeArray,false,false,true);
        customizeHTMLLayoutForSRandMR(q10Layout, questionArrayPosition, workingArray,true);
        addInputBoxForOther(q10Layout);
        appendElementsToDocForSRandMR(q10Layout, workingArray, displayQ10);
    }

    function generateHTMLLayoutForSRandMR(layoutName, answerArray, otherOption, noneOption, refusedOption) {

        workingArray = answerArray.slice();

        otherOption && workingArray.push({'value': 97, 'label': 'Other'});
        noneOption && workingArray.push({'value': 98, 'label': 'None'});
        refusedOption && workingArray.push({'value': 99, 'label': 'Refused'});

        let surveyQuestion = document.createElement("div");
        let questionLabel = document.createElement("label");
        let divRadioGroup = document.createElement("div");

        layoutName.push(surveyQuestion, questionLabel, divRadioGroup);

        for (let i = 0; i < workingArray.length; i++) {
            // Create the div element
            let divFormCheck = document.createElement("div");

            // Create the input element
            let input = document.createElement("input");

            // Create the label element
            let label = document.createElement("label");

            // Store the values in the array
            layoutName.push(divFormCheck, input, label);
        }
    }

    function generateHTMLLayoutForOpenEnd(layoutName) {

        let surveyQuestion = document.createElement("div");
        let questionLabel = document.createElement("label");
        let divRadioGroup = document.createElement("div");
        let divFormCheck = document.createElement("div");
        let textarea = document.createElement("textarea");

        // Store the values in the array
        layoutName.push(surveyQuestion, questionLabel, divRadioGroup, divFormCheck, textarea);
    }

    function generateHTMLLayoutForNumeric(layoutName) {

        let surveyQuestion = document.createElement("div");
        let questionLabel = document.createElement("label");
        let divRadioGroup = document.createElement("div");
        let divFormCheck = document.createElement("div");
        let input = document.createElement("input");

        // Store the values in the array
        layoutName.push(surveyQuestion, questionLabel, divRadioGroup, divFormCheck, input);
    }

    function generateHTMLLayoutForRating(layoutName, rowArray, columnArray, otherOption) {

        workingRowArray = rowArray.slice();
        workingColumnArray = columnArray.slice();

        otherOption && workingRowArray.push({'value': 97, 'label': 'Other'});

        let surveyQuestion = document.createElement("div");
        let questionLabel = document.createElement("label");
        let divRatingsGroup = document.createElement("div");
        layoutName.push(surveyQuestion, questionLabel, divRatingsGroup);

        let divRatingsLabels = document.createElement("div");
        layoutName.push(divRatingsLabels);

        // Create the label elements for the columns
        for (let i = 0; i < workingColumnArray.length; i++) {
            // Create the label element
            let label = document.createElement("label");

            // Store the values in the array
            layoutName.push(label);
        }

        // Create the row items for rating
        for (let i = 0; i < workingRowArray.length; i++) {
            // Create the div element
            let divFormCheck = document.createElement("div");

            // Create the label element
            let label = document.createElement("label");

            // Create the input array to store the inputs
            let inputs = [];

            // Create the input element and store them in the inputs array
            for (let j = 1; j < 6; j++) {
                let input = document.createElement("input");
                inputs.push(input)
            }

            // Store the values in the array
            layoutName.push(divFormCheck, label, ...inputs);
        }

    }

    function customizeHTMLLayoutForSRandMR(layoutName, questionArrayPosition, answerArray, singleType) {

        let layoutStartingPosition = 3;
        let groupType = "";
        let questionType = "";

        if (singleType) {
            groupType = "radio-group";
            questionType = "radio";
        } else {
            groupType = "checkbox-group";
            questionType = "checkbox";
        }

        layoutName[0].className = "survey-question";

        layoutName[1].className = "pb-2 pt-3";
        layoutName[1].setAttribute("for", groupType);
        layoutName[1].innerHTML = "Q" + questionText[questionArrayPosition].value + ". " + questionText[questionArrayPosition].label;

        layoutName[2].className = "";
        layoutName[2].setAttribute("class", groupType);
        layoutName[2].setAttribute("id", groupType + "_" + (questionArrayPosition + 1));

        for (let i = 0; i < answerArray.length; i++) {

            layoutName[layoutStartingPosition].className = "form-check pb-2";

            layoutName[layoutStartingPosition + 1].setAttribute("type", questionType);
            layoutName[layoutStartingPosition + 1].className = "form-check-input";
            layoutName[layoutStartingPosition + 1].setAttribute("id",questionType + "_" + questionText[questionArrayPosition].value + "_" + i);
            layoutName[layoutStartingPosition + 1].setAttribute("name","q" + questionText[questionArrayPosition].value)
            layoutName[layoutStartingPosition + 1].setAttribute("value", answerArray[i].value);

            layoutName[layoutStartingPosition + 2].className = "form-check-label";
            layoutName[layoutStartingPosition + 2].setAttribute("for",questionType + "_" + questionText[questionArrayPosition].value + "_" + i);
            layoutName[layoutStartingPosition + 2].innerHTML = answerArray[i].label;

            layoutStartingPosition += 3;
        }
    }

    function customizeHTMLLayoutForOpenEnd(layoutName, questionArrayPosition) {

        layoutName[0].className = "survey-question";

        layoutName[1].className = "pb-2 pt-3";
        layoutName[1].setAttribute("for", "textarea");
        layoutName[1].innerHTML = "Q" + questionText[questionArrayPosition].value + ". " + questionText[questionArrayPosition].label;

        layoutName[2].className = "";
        layoutName[2].setAttribute("class", "textarea");
        layoutName[2].setAttribute("id", "textarea" + "_" + (questionArrayPosition + 1));

        layoutName[3].className = "form-textarea pb-2";

        layoutName[4].setAttribute("type", "textarea");
        layoutName[4].className = "form-textarea-input";
        layoutName[4].setAttribute("id","textarea_" + questionText[questionArrayPosition].value);
        layoutName[4].setAttribute("name","q" + questionText[questionArrayPosition].value)
    }

    function customizeHTMLLayoutForNumeric(layoutName, questionArrayPosition) {

        layoutName[0].className = "survey-question";

        layoutName[1].className = "pb-2 pt-3";
        layoutName[1].setAttribute("for", "numeric");
        layoutName[1].innerHTML = "Q" + questionText[questionArrayPosition].value + ". " + questionText[questionArrayPosition].label;

        layoutName[2].className = "";
        layoutName[2].setAttribute("class", "numeric");
        layoutName[2].setAttribute("id", "numeric" + "_" + (questionArrayPosition + 1));

        layoutName[3].className = "form-numeric pb-2";

        layoutName[4].setAttribute("type", "number");
        layoutName[4].className = "form-numeric-input";
        layoutName[4].setAttribute("id","numeric_" + questionText[questionArrayPosition].value);
        layoutName[4].setAttribute("name","q" + questionText[questionArrayPosition].value)
    }

    function customizeHTMLLayoutForRating(layoutName, questionArrayPosition, answerRowArray, answerColumnArray) {

        let layoutStartingPosition = 4;
        let counter = 1;

        layoutName[0].className = "survey-question";

        layoutName[1].className = "pb-2 pt-3";
        layoutName[1].setAttribute("for", "ratings-group");
        layoutName[1].innerHTML = "Q" + questionText[questionArrayPosition].value + ". " + questionText[questionArrayPosition].label;

        layoutName[2].className = "";
        layoutName[2].setAttribute("class", "ratings-group");
        layoutName[2].setAttribute("id", "ratings-group_" + (questionArrayPosition + 1));

        layoutName[3].className = "ratings-labels";

        for (let  i = 0; i < answerColumnArray.length; i++) {
            layoutName[layoutStartingPosition].className = "form-check pb-2";
            layoutName[layoutStartingPosition].innerHTML = answerColumnArray[i].label;

            layoutStartingPosition += 1;
        }

        for (let i = 0; i < answerRowArray.length; i++) {

            layoutName[layoutStartingPosition].className = "form-check pb-2";

            layoutName[layoutStartingPosition + 1].className = "form-check-label";
            layoutName[layoutStartingPosition + 1].setAttribute("for","radio_" + questionText[questionArrayPosition].value + "_" + i);
            layoutName[layoutStartingPosition + 1].innerHTML = answerRowArray[i].label;

            for (let j = 0; j < 5; j++) {
                layoutName[layoutStartingPosition + (2 + j)].setAttribute("type", "radio");
                layoutName[layoutStartingPosition + (2 + j)].className = "form-check-input";
                layoutName[layoutStartingPosition + (2 + j)].setAttribute("id","radio_" + questionText[questionArrayPosition].value + "_" + counter);
                layoutName[layoutStartingPosition + (2 + j)].setAttribute("name","q" + questionText[questionArrayPosition].value + "_" + counter);
                layoutName[layoutStartingPosition + (2 + j)].setAttribute("value", j);
            }

            layoutStartingPosition += 7;
            counter += 1;
        }
    }

    function addInputBoxForOther(layoutName) {

        layoutName.forEach((element, index) => {
            if (element.textContent === "Other") {

                // Create a new element to be inserted
                let otherInputBox = document.createElement("input");
                otherInputBox.setAttribute("type", "text");

                // Insert the new element after the element with "Other"
                layoutName[index].appendChild(otherInputBox);
            }
        });
    }

    function appendElementsToDocForSRandMR(layoutName, answerArray, displayQuestion) {

        let layoutStartingPosition = 3;

        for (let i = 0; i < answerArray.length; i++) {
            layoutName[layoutStartingPosition].appendChild(layoutName[layoutStartingPosition + 1]);
            layoutName[layoutStartingPosition].appendChild(layoutName[layoutStartingPosition + 2]);

            layoutName[2].appendChild(layoutName[layoutStartingPosition]);

            layoutStartingPosition += 3;
        }

        layoutName[0].appendChild(layoutName[1]);
        layoutName[0].appendChild(layoutName[2]);

        displayQuestion.appendChild(layoutName[0]);

        workingArray = [];
    }

    function appendElementsToDocForOpenEnd(layoutName, displayQuestion) {

        layoutName[3].appendChild(layoutName[4]);

        layoutName[2].appendChild(layoutName[3]);

        layoutName[0].appendChild(layoutName[1]);
        layoutName[0].appendChild(layoutName[2]);

        displayQuestion.appendChild(layoutName[0]);
    }

})();