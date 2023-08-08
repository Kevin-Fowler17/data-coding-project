package com.codeup.datacodingproject.controllers;

import com.codeup.datacodingproject.models.Q1;
import com.codeup.datacodingproject.repositories.SurveyAnswersRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Controller
public class ResultsController {

    private final SurveyAnswersRepository surveyAnswersDao;

    @GetMapping("/results")
    public String showResultsForm(Model model){

//        System.out.println("**********************");
//        System.out.println("Results Controller");
//        System.out.println("**********************");

        List<Object[]> q1Percentages = surveyAnswersDao.getQ1AnswerPercentages();
        List<Object[]> q3Percentages = surveyAnswersDao.getQ3AnswerPercentages();
        List<Object[]> q5Percentages = surveyAnswersDao.getQ5AnswerPercentages();
        List<Object[]> q7Percentages = surveyAnswersDao.getQ7AnswerPercentages();
        List<Object[]> q9Percentages = surveyAnswersDao.getQ9AnswerPercentages();
        List<Object[]> q10Percentages = surveyAnswersDao.getQ10AnswerPercentages();


        model.addAttribute("q1Percentages", q1Percentages);
        model.addAttribute("q3Percentages", q3Percentages);
        model.addAttribute("q5Percentages", q5Percentages);
        model.addAttribute("q7Percentages", q7Percentages);
        model.addAttribute("q9Percentages", q9Percentages);
        model.addAttribute("q10Percentages", q10Percentages);


//        System.out.println("**************************");
//        for (Object[] row : q1Percentages) {
//            for (Object value : row) {
//                System.out.print(value + " ");
//            }
//            System.out.println();
//        }
//        System.out.println("**************************");


        return "results";
    }

}
