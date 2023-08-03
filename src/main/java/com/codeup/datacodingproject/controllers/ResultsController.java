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
        List<Object[]> roundedQ1Percentages = new ArrayList<>();
        for (Object[] percentage : q1Percentages) {
            String q1Value = (String) percentage[0];
            double rawPercentage = (double) percentage[1];
            double roundedPercentage = Math.round(rawPercentage * 100.0) / 100.0; // Round to 2 decimal places
            roundedQ1Percentages.add(new Object[] { q1Value, roundedPercentage });
        }

        model.addAttribute("roundedQ1Percentages", roundedQ1Percentages);

        System.out.println("**********************");
        System.out.println(q1Percentages);
        System.out.println("**********************");

        return "results";
    }

}
