"use strict";

(function () {

    // const displayQ1 = document.getElementsByClassName("q1")[0];
    // const displayQ2 = document.getElementsByClassName("q2")[0];
    // const displayQ3 = document.getElementsByClassName("q3")[0];
    // const displayQ4 = document.getElementsByClassName("q4")[0];
    // const displayQ5 = document.getElementsByClassName("q5")[0];
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
        {'value': 7, 'label': 'Yellow'},
        {'value': 97, 'label': 'Other'},
        {'value': 98, 'label': 'None'}
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
        {'value': 99, 'label': 'Refused'}
    ];

    // generate survey questions
    // renderQ1(0)
    // renderQ2(1)
    // renderQ3(2)
    // renderQ4(3)
    // renderQ5(4)
    // renderQ6(5)
    // renderQ7(6)
    // renderQ8(7)
    renderQ9(8)
    renderQ10(9)

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
    

    function generateHTMLLayout(layoutName, answerArray) {

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




// let surveyQuestion = document.createElement("div");
// let questionLabel = document.createElement("label");
// let divRadioGroup = document.createElement("div");
// let divFormCheck1 = document.createElement("div");
// let input1 = document.createElement("input");
// let label1 = document.createElement("label");
// let divFormCheck2 = document.createElement("div");
// let input2 = document.createElement("input");
// let label2 = document.createElement("label");
// let divFormCheck3 = document.createElement("div");
// let input3 = document.createElement("input");
// let label3 = document.createElement("label");
// let divFormCheck4 = document.createElement("div");
// let input4 = document.createElement("input");
// let label4 = document.createElement("label");
// let divFormCheck5 = document.createElement("div");
// let input5 = document.createElement("input");
// let label5 = document.createElement("label");
// let divFormCheck6 = document.createElement("div");
// let input6 = document.createElement("input");
// let label6 = document.createElement("label");
// let divFormCheck99 = document.createElement("div");
// let input99 = document.createElement("input");
// let label99 = document.createElement("label");



// q10Layout[0].className = "survey-question";
//
// q10Layout[1].className = "pb-2 pt-3"
// q10Layout[1].setAttribute("for", "radio-group");
// q10Layout[1].innerHTML = "Q" + questionText[questionNumber].value + ". " + questionText[questionNumber].label;
//
// q10Layout[2].className = "";
// q10Layout[2].setAttribute("id", "radio-group")
//
// q10Layout[3].className = "form-check pb-2";
//
// q10Layout[4].setAttribute("type", "radio");
// q10Layout[4].className = "form-check-input";
// q10Layout[4].setAttribute("id", "radio_" + questionNumber + "_0");
// q10Layout[4].setAttribute("name", "q" + questionNumber)
// q10Layout[4].setAttribute("value", "a");
//
// q10Layout[5].className = "form-check-label";
// q10Layout[5].setAttribute("for", "radio_" + questionNumber + "_0");
// q10Layout[5].innerHTML = incomeArray[0].label;
//
// q10Layout[6].className = "form-check pb-2";
//
// q10Layout[7].setAttribute("type", "radio");
// q10Layout[7].className = "form-check-input";
// q10Layout[7].setAttribute("id", "radio_" + questionNumber + "_1");
// q10Layout[7].setAttribute("name", "q" + questionNumber)
// q10Layout[7].setAttribute("value", "a");
//
// q10Layout[8].className = "form-check-label";
// q10Layout[8].setAttribute("for", "radio_" + questionNumber + "_1");
// q10Layout[8].innerHTML = incomeArray[1].label;
//
// q10Layout[9].className = "form-check pb-2";
//
// q10Layout[10].setAttribute("type", "radio");
// q10Layout[10].className = "form-check-input";
// q10Layout[10].setAttribute("id", "radio_" + questionNumber + "_2");
// q10Layout[10].setAttribute("name", "q" + questionNumber)
// q10Layout[10].setAttribute("value", "a");
//
// q10Layout[11].className = "form-check-label";
// q10Layout[11].setAttribute("for", "radio_" + questionNumber + "_2");
// q10Layout[11].innerHTML = incomeArray[2].label;
//
// q10Layout[12].className = "form-check pb-2";
//
// q10Layout[13].setAttribute("type", "radio");
// q10Layout[13].className = "form-check-input";
// q10Layout[13].setAttribute("id", "radio_" + questionNumber + "_3");
// q10Layout[13].setAttribute("name", "q" + questionNumber)
// q10Layout[13].setAttribute("value", "a");
//
// q10Layout[14].className = "form-check-label";
// q10Layout[14].setAttribute("for", "radio_" + questionNumber + "_3");
// q10Layout[14].innerHTML = incomeArray[3].label;
//
// q10Layout[15].className = "form-check pb-2";
//
// q10Layout[16].setAttribute("type", "radio");
// q10Layout[16].className = "form-check-input";
// q10Layout[16].setAttribute("id", "radio_" + questionNumber + "_4");
// q10Layout[16].setAttribute("name", "q" + questionNumber)
// q10Layout[16].setAttribute("value", "a");
//
// q10Layout[17].className = "form-check-label";
// q10Layout[17].setAttribute("for", "radio_" + questionNumber + "_4");
// q10Layout[17].innerHTML = incomeArray[4].label;
//
// q10Layout[18].className = "form-check pb-2";
//
// q10Layout[19].setAttribute("type", "radio");
// q10Layout[19].className = "form-check-input";
// q10Layout[19].setAttribute("id", "radio_" + questionNumber + "_5");
// q10Layout[19].setAttribute("name", "q" + questionNumber)
// q10Layout[19].setAttribute("value", "a");
//
// q10Layout[20].className = "form-check-label";
// q10Layout[20].setAttribute("for", "radio_" + questionNumber + "_5");
// q10Layout[20].innerHTML = incomeArray[5].label;
//
// q10Layout[21].className = "form-check pb-2";
//
// q10Layout[22].setAttribute("type", "radio");
// q10Layout[22].className = "form-check-input";
// q10Layout[22].setAttribute("id", "radio_" + questionNumber + "_6");
// q10Layout[22].setAttribute("name", "q" + questionNumber)
// q10Layout[22].setAttribute("value", "a");
//
// q10Layout[23].className = "form-check-label";
// q10Layout[23].setAttribute("for", "radio_" + questionNumber + "_6");
// q10Layout[23].innerHTML = incomeArray[6].label;



// divFormCheck1.appendChild(input1);
// divFormCheck1.appendChild(label1);
//
// divFormCheck2.appendChild(input2);
// divFormCheck2.appendChild(label2);
//
// divFormCheck3.appendChild(input3);
// divFormCheck3.appendChild(label3);
//
// divFormCheck4.appendChild(input4);
// divFormCheck4.appendChild(label4);
//
// divFormCheck5.appendChild(input5);
// divFormCheck5.appendChild(label5);
//
// divFormCheck6.appendChild(input6);
// divFormCheck6.appendChild(label6);
//
// divFormCheck99.appendChild(input99);
// divFormCheck99.appendChild(label99);
//
// divRadioGroup.appendChild(divFormCheck1);
// divRadioGroup.appendChild(divFormCheck2);
// divRadioGroup.appendChild(divFormCheck3);
// divRadioGroup.appendChild(divFormCheck4);
// divRadioGroup.appendChild(divFormCheck5);
// divRadioGroup.appendChild(divFormCheck6);
// divRadioGroup.appendChild(divFormCheck99);
//
// surveyQuestion.appendChild(questionLabel);
//
// surveyQuestion.appendChild(divRadioGroup);
//
// displayQ10.appendChild(surveyQuestion);