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

        System.out.println("**********************");
        System.out.println("Results Controller");
//        System.out.println(surveyAnswers);
        System.out.println("**********************");

        List<Object[]> q1Percentages = surveyAnswersDao.getQ1AnswerPercentages();

        // Round the percentages
//        List<Object[]> roundedQ1Percentages = new ArrayList<>();
//        for (Object[] percentage : q1Percentages) {
//            long q1Value = (long) percentage[0];
//            float rawPercentage = (float) percentage[1];
//            long roundedPercentage = Math.round(rawPercentage);
//            roundedQ1Percentages.add(new Object[] {q1Value, roundedPercentage});
//        }
//
//        System.out.println(roundedQ1Percentages);
//
//        model.addAttribute("roundedQ1Percentages", roundedQ1Percentages);

        model.addAttribute("q1Percentages", q1Percentages);

        System.out.println("**********************");
        System.out.println(q1Percentages);
        System.out.println("**********************");

        return "results";
    }

}
