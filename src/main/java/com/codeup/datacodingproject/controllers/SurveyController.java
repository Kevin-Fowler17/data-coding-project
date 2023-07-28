package com.codeup.datacodingproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SurveyController {

    @GetMapping("/survey")
    public String showSurveyForm(){
        return "survey";
    }

    @PostMapping("/results")
    public String showSurveyResults(){
        return "results";
    }

}
