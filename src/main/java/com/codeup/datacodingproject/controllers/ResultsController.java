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

        model.addAttribute("q1Percentages", q1Percentages);

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
