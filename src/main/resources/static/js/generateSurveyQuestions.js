"use strict";

(function () {

    let incomeArray = [
        {'value': 1, 'label': 'Less that $20,000'},
        {'value': 2, 'label': '$20,000 to $34,999'},
        {'value': 3, 'label': '$35,000 to $49,999'},
        {'value': 4, 'label': '$50,000 to $74,999'},
        {'value': 5, 'label': '$75,000 to $99,999'},
        {'value': 6, 'label': '$100,000 or more'},
        {'value': 99, 'label': 'Refused'},
    ];

    // const q1 = document.getElementById("q1");
    // const displayQ10 = document.getElementById("q10");
    const displayQ10 = document.getElementsByClassName("q10")[0];

    renderQ10()

    function renderQ10() {

        let questionNumber = 10;

        console.log("***********************")
        console.log("It got in.")
        console.log("***********************")

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

        label.className = "pb-2 pt-3"
        label.setAttribute("for", "radio-group");
        label.innerHTML = "Q10. What is your income?";

        divRadioGroup.className = "";
        divRadioGroup.setAttribute("id", "radio-group")

        divFormCheck1.className = "form-check pb-2";

        input1.setAttribute("type", "radio");
        input1.className = "form-check-input";
        input1.setAttribute("id", "radio_" + questionNumber + "_0");
        input1.setAttribute("name", "q" + questionNumber)
        input1.setAttribute("value", "a");

        label1.className = "form-check-label";
        label1.setAttribute("for", "radio_" + questionNumber + "_0");
        label1.innerHTML = incomeArray[0].label;

        divFormCheck2.className = "form-check pb-2";

        input2.setAttribute("type", "radio");
        input2.className = "form-check-input";
        input2.setAttribute("id", "radio_" + questionNumber + "_1");
        input2.setAttribute("name", "q" + questionNumber)
        input2.setAttribute("value", "a");

        label2.className = "form-check-label";
        label2.setAttribute("for", "radio_" + questionNumber + "_1");
        label2.innerHTML = incomeArray[1].label;

        divFormCheck3.className = "form-check pb-2";

        input3.setAttribute("type", "radio");
        input3.className = "form-check-input";
        input3.setAttribute("id", "radio_" + questionNumber + "_2");
        input3.setAttribute("name", "q" + questionNumber)
        input3.setAttribute("value", "a");

        label3.className = "form-check-label";
        label3.setAttribute("for", "radio_" + questionNumber + "_2");
        label3.innerHTML = incomeArray[2].label;

        divFormCheck4.className = "form-check pb-2";

        input4.setAttribute("type", "radio");
        input4.className = "form-check-input";
        input4.setAttribute("id", "radio_" + questionNumber + "_3");
        input4.setAttribute("name", "q" + questionNumber)
        input4.setAttribute("value", "a");

        label4.className = "form-check-label";
        label4.setAttribute("for", "radio_" + questionNumber + "_3");
        label4.innerHTML = incomeArray[3].label;

        divFormCheck5.className = "form-check pb-2";

        input5.setAttribute("type", "radio");
        input5.className = "form-check-input";
        input5.setAttribute("id", "radio_" + questionNumber + "_4");
        input5.setAttribute("name", "q" + questionNumber)
        input5.setAttribute("value", "a");

        label5.className = "form-check-label";
        label5.setAttribute("for", "radio_" + questionNumber + "_4");
        label5.innerHTML = incomeArray[4].label;

        divFormCheck6.className = "form-check pb-2";

        input6.setAttribute("type", "radio");
        input6.className = "form-check-input";
        input6.setAttribute("id", "radio_" + questionNumber + "_5");
        input6.setAttribute("name", "q" + questionNumber)
        input6.setAttribute("value", "a");

        label6.className = "form-check-label";
        label6.setAttribute("for", "radio_" + questionNumber + "_5");
        label6.innerHTML = incomeArray[5].label;

        divFormCheck99.className = "form-check pb-2";

        input99.setAttribute("type", "radio");
        input99.className = "form-check-input";
        input99.setAttribute("id", "radio_" + questionNumber + "_6");
        input99.setAttribute("name", "q" + questionNumber)
        input99.setAttribute("value", "a");

        label99.className = "form-check-label";
        label99.setAttribute("for", "radio_" + questionNumber + "_6");
        label99.innerHTML = incomeArray[6].label;

        divFormCheck1.appendChild(input1);
        divFormCheck1.appendChild(label1);

        divFormCheck2.appendChild(input2);
        divFormCheck2.appendChild(label2);

        divFormCheck3.appendChild(input3);
        divFormCheck3.appendChild(label3);

        divFormCheck4.appendChild(input4);
        divFormCheck4.appendChild(label4);

        divFormCheck5.appendChild(input5);
        divFormCheck5.appendChild(label5);

        divFormCheck6.appendChild(input6);
        divFormCheck6.appendChild(label6);

        divFormCheck99.appendChild(input99);
        divFormCheck99.appendChild(label99);

        divRadioGroup.appendChild(divFormCheck1);
        divRadioGroup.appendChild(divFormCheck2);
        divRadioGroup.appendChild(divFormCheck3);
        divRadioGroup.appendChild(divFormCheck4);
        divRadioGroup.appendChild(divFormCheck5);
        divRadioGroup.appendChild(divFormCheck6);
        divRadioGroup.appendChild(divFormCheck99);

        surveyQuestion.appendChild(label);

        surveyQuestion.appendChild(divRadioGroup);

        displayQ10.appendChild(surveyQuestion);

        console.log(incomeArray);
        console.log(displayQ10);

    }

})();