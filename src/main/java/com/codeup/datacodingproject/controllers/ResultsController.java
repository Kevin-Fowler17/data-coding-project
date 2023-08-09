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

        List<Object[]> q1AnswerPercentages = surveyAnswersDao.getQAnswerPercentages(1);
        List<Object[]> q3AnswerPercentages = surveyAnswersDao.getQAnswerPercentages(3);
        List<Object[]> q5AnswerPercentages = surveyAnswersDao.getQAnswerPercentages(5);
        List<Object[]> q7AnswerPercentages = surveyAnswersDao.getQAnswerPercentages(7);
        List<Object[]> q9AnswerPercentages = surveyAnswersDao.getQAnswerPercentages(9);
        List<Object[]> q10AnswerPercentages = surveyAnswersDao.getQAnswerPercentages(10);



        model.addAttribute("q1AnswerPercentages", q1AnswerPercentages);
        model.addAttribute("q3AnswerPercentages", q3AnswerPercentages);
        model.addAttribute("q5AnswerPercentages", q5AnswerPercentages);
        model.addAttribute("q7AnswerPercentages", q7AnswerPercentages);
        model.addAttribute("q9AnswerPercentages", q9AnswerPercentages);
        model.addAttribute("q10AnswerPercentages", q10AnswerPercentages);


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
