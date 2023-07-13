package com.codeup.datacodingproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ResultsController {

    @GetMapping("/results")
    public String showResultsForm(){
        return "results";
    }

}