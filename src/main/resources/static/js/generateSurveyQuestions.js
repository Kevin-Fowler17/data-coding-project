"use strict";

(function () {

    // const q1 = document.getElementById("q1");
    ``
    const q10 = document.getElementById("q10")

    function renderQ10() {

        let questionNumber = 10;

        let surveyQuestion = document.createElement("div");
        let label = document.createElement("label");
        let divRadioGroup = document.createElement("div");
        let divFormCheck1 = document.createElement("div");
        let input1 = document.createElement("input");
        let label1 = document.createElement("label");
        let divFormCheck2 = document.createElement("div");
        let input2 = document.createElement("input");
        let label2 = document.createElement("label");
        let divFormCheck3 = document.createElement("div");
        let input3 = document.createElement("input");
        let label3 = document.createElement("label");
        let divFormCheck4 = document.createElement("div");
        let input4 = document.createElement("input");
        let label4 = document.createElement("label");
        let divFormCheck5 = document.createElement("div");
        let input5 = document.createElement("input");
        let label5 = document.createElement("label");
        let divFormCheck6 = document.createElement("div");
        let input6 = document.createElement("input");
        let label6 = document.createElement("label");
        let divFormCheck99 = document.createElement("div");
        let input99 = document.createElement("input");
        let label99 = document.createElement("label");

        surveyQuestion.className = "survey-question";

        label.className = "question-text";
        label.innerHTML = "Q" + questionNumber + ". What is your income?"

        divRadioGroup.className = "";
        divRadioGroup.setAttribute("id", "question-group" + questionNumber);

        divFormCheck1.className = "form-check pb-2";

        for (let i = 0; i < incomeArray.length; i++) {
            return 'input' + (i + 1) + '.setAttribute("type", "radio");' +
            'input' + (i + 1) + '.className = "form-check-input";' +
            'input' + (i + 1) + '.setAttribute("id", "radio_" + questionNumber + "_1");' +
            'input' + (i + 1) + '.setAttribute("name", "q" + questionNumber)' +
            'input' + (i + 1) + '.setAttribute("value", "1");'

        }

        // input1.setAttribute("type", "radio");
        // input1.className = "form-check-input";
        // input1.setAttribute("id", "radio_" + questionNumber + "_1");
        // input1.setAttribute("name", "q" + questionNumber)
        // input1.setAttribute("value", "1");
        //
        // label1.className = "form-check-label";
        // label1.setAttribute("for", "radio_" + index + "_0");
        // label1.innerHTML = quiz.answers.a;


        divFormCheck1.appendChild(input1);
        divFormCheck1.appendChild(label1);

        // divFormCheck2.appendChild(input2);
        // divFormCheck2.appendChild(label2);
        //
        // divFormCheck3.appendChild(input3);
        // divFormCheck3.appendChild(label3);
        //
        // divFormCheck4.appendChild(input4);
        // divFormCheck4.appendChild(label4);

        divRadioGroup.appendChild(divFormCheck1);
        // divRadioGroup.appendChild(divFormCheck2);
        // divRadioGroup.appendChild(divFormCheck3);
        // divRadioGroup.appendChild(divFormCheck4);

        surveyQuestion.appendChild(label);

        surveyQuestion.appendChild(divRadioGroup);

        // displayQuiz.appendChild(quizQuestion);




        incomeArray.forEach(renderRadioOptions);




        // <p>Q10. What is your income?</p>
        // <label><input type="radio" name="q10" value="1"> Less than $20,000</label><br>
        // <label><input type="radio" name="q10" value="2"> $20,000 to $34,999</label><br>
        // <label><input type="radio" name="q10" value="3"> $35,000 to $49,999</label><br>
        // <label><input type="radio" name="q10" value="4"> $50,000 to $74,999</label><br>
        // <label><input type="radio" name="q10" value="5"> $75,000 to $99,999</label><br>
        // <label><input type="radio" name="q10" value="6"> $100,000 or more</label><br>
        // <label><input type="radio" name="q10" value="99"> Refused</label><br>


    }

    function renderRadioOptions(incomeArray, index) {

        input1.setAttribute("type", "radio");
        input1.className = "form-check-input";
        input1.setAttribute("id", "radio_" + index + "_0");
        input1.setAttribute("name", "q" + index)
        input1.setAttribute("value", "a");

        label1.className = "form-check-label";
        label1.setAttribute("for", "radio_" + index + "_0");
        label1.innerHTML = quiz.answers.a;

    }

    let incomeArray = [
        {'value': 1, 'label': 'Less that $20,000'},
        {'value': 2, 'label': '$20,000 to $34,999'},
        {'value': 3, 'label': '$35,000 to $49,999'},
        {'value': 4, 'label': '$50,000 to $74,999'},
        {'value': 5, 'label': '$75,000 to $99,999'},
        {'value': 6, 'label': '$100,000 or more'},
        {'value': 99, 'label': 'Refused'},
    ]




})();