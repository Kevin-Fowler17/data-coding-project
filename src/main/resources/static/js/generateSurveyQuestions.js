"use strict";

(function () {

    const displayQ1 = document.getElementsByClassName("q1")[0];
    // const displayQ2 = document.getElementsByClassName("q2")[0];
    // const displayQ3 = document.getElementsByClassName("q3")[0];
    // const displayQ4 = document.getElementsByClassName("q4")[0];
    const displayQ5 = document.getElementsByClassName("q5")[0];
    // const displayQ6 = document.getElementsByClassName("q6")[0];
    // const displayQ7 = document.getElementsByClassName("q7")[0];
    // const displayQ8 = document.getElementsByClassName("q8")[0];
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
        {'value': 10, 'label': 'What is your income?'},
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

    let ColorRatingArray = [
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
        {'value': 9, 'label': 'Volleyball'},
        {'value': 97, 'label': 'Other'},
        {'value': 98, 'label': 'None'}
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
        {'value': 6, 'label': '$100,000 or more'},
        // {'value': 99, 'label': 'Refused'}
    ];

    // generate survey questions
    renderQ1(0)
    // renderQ2(1)
    // renderQ3(2)
    // renderQ4(3)
    renderQ5(4)
    // renderQ6(5)
    // renderQ7(6)
    // renderQ8(7)
    renderQ9(8)
    renderQ10(9)

    function renderQ1(questionArrayPosition) {
        generateHTMLLayout(q1Layout, colorArray, true, false, false);
        customizeHTMLLayout(q1Layout, questionArrayPosition, colorArray);
        appendElementsToDoc(q1Layout, colorArray, displayQ1);
    }

    function renderQ5(questionArrayPosition) {
        generateHTMLLayout(q5Layout, sportsArray);
        customizeHTMLLayout(q5Layout, questionArrayPosition, sportsArray);
        appendElementsToDoc(q5Layout, sportsArray, displayQ5);
    }

    function renderQ9(questionArrayPosition) {
        generateHTMLLayout(q9Layout, genderArray);
        customizeHTMLLayout(q9Layout, questionArrayPosition, genderArray);
        appendElementsToDoc(q9Layout, genderArray, displayQ9);
    }

    function renderQ10(questionArrayPosition) {
        generateHTMLLayout(q10Layout, incomeArray);
        customizeHTMLLayout(q10Layout, questionArrayPosition, incomeArray);
        appendElementsToDoc(q10Layout, incomeArray, displayQ10);
    }
    

    function generateHTMLLayout(layoutName, answerArray, otherOption, noneOption, refusedOption) {

        let surveyQuestion = document.createElement("div");
        let questionLabel = document.createElement("label");
        let divRadioGroup = document.createElement("div");

        layoutName.push(surveyQuestion, questionLabel, divRadioGroup);

        for (let i = 0; i < answerArray.length; i++) {
            // Create the div element
            let divFormCheck = document.createElement("div");

            // Create the input element
            let input = document.createElement("input");

            // Create the label element
            let label = document.createElement("label");

            // Store the values in the array
            layoutName.push(divFormCheck, input, label);
        }

        if (otherOption = true) {
            // Create the div element
            let divFormCheck = document.createElement("div");

            // Create the input element
            let input1 = document.createElement("input");

            // Create the label element
            let label = document.createElement("label");

            // Create the input element
            let input2 = document.createElement("input");

            // Store the values in the array
            layoutName.push(divFormCheck, input1, label, input2);
        }

        if (noneOption = true) {
            // Create the div element
            let divFormCheck = document.createElement("div");

            // Create the input element
            let input = document.createElement("input");

            // Create the label element
            let label = document.createElement("label");

            // Store the values in the array
            layoutName.push(divFormCheck, input, label);
        }

        if (refusedOption = true) {
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

    function customizeHTMLLayout(layoutName, questionArrayPosition, answerArray) {

        let layoutStartingPosition = 3;

        layoutName[0].className = "survey-question";

        layoutName[1].className = "pb-2 pt-3"
        layoutName[1].setAttribute("for", "radio-group");
        layoutName[1].innerHTML = "Q" + questionText[questionArrayPosition].value + ". " + questionText[questionArrayPosition].label;

        layoutName[2].className = "";
        layoutName[2].setAttribute("id", "radio-group")

        for (let i = 0; i < answerArray.length; i++) {

            layoutName[layoutStartingPosition].className = "form-check pb-2";

            layoutName[layoutStartingPosition + 1].setAttribute("type", "radio");
            layoutName[layoutStartingPosition + 1].className = "form-check-input";
            layoutName[layoutStartingPosition + 1].setAttribute("id", "radio_" + questionText[questionArrayPosition].value + "_" + i);
            layoutName[layoutStartingPosition + 1].setAttribute("name", "q" + questionText[questionArrayPosition].value)
            layoutName[layoutStartingPosition + 1].setAttribute("value", answerArray[i].value);

            layoutName[layoutStartingPosition + 2].className = "form-check-label";
            layoutName[layoutStartingPosition + 2].setAttribute("for", "radio_" + questionText[questionArrayPosition].value + "_" + i);
            layoutName[layoutStartingPosition + 2].innerHTML = answerArray[i].label;

            layoutStartingPosition += 3;
        }
    }

    function appendElementsToDoc(layoutName, answerArray, displayQuestion) {
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
    }

})();