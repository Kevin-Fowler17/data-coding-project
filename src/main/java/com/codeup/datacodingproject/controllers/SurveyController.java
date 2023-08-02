package com.codeup.datacodingproject.controllers;

import com.codeup.datacodingproject.models.SurveyAnswers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SurveyController {

    @GetMapping("/survey")
    public String showSurveyForm(){
        return "survey";
    }

    @PostMapping("/results")
    public String showSurveyResults(@ModelAttribute SurveyAnswers surveyAnswers){
        System.out.println(surveyAnswers);
        return "results";
    }

}
