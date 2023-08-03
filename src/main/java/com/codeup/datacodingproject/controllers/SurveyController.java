package com.codeup.datacodingproject.controllers;

import com.codeup.datacodingproject.models.SurveyAnswers;
import com.codeup.datacodingproject.repositories.SurveyAnswersRepository;
import org.springframework.stereotype.Controller;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@AllArgsConstructor
@Controller
public class SurveyController {

    private final SurveyAnswersRepository surveyAnswersDao;

    @GetMapping("/survey")
    public String showSurveyForm(){
        return "survey";
    }

    @PostMapping("/results")
    public String saveSurveyResults(@ModelAttribute SurveyAnswers surveyAnswers){
        System.out.println("**********************");
        System.out.println("Survey Controller");
        System.out.println(surveyAnswers);
        System.out.println("**********************");

        surveyAnswers.getQ1().setSurveyAnswers(surveyAnswers);

        surveyAnswersDao.save(surveyAnswers);

        return "redirect:/results";
    }

}
