package com.codeup.datacodingproject.repositories;

import com.codeup.datacodingproject.models.Q1;
import com.codeup.datacodingproject.models.SurveyAnswers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SurveyAnswersRepository extends JpaRepository<SurveyAnswers, Long> {

   @Query("SELECT q.q1, COUNT(q.q1) * 100.0 / (SELECT COUNT(sa) FROM SurveyAnswers sa) FROM Q1 q JOIN q.surveyAnswers sa GROUP BY q.q1")
   List<Object[]> getQ1AnswerPercentages();


//   @Query(value = "SELECT (COUNT(q1) * 100) / (SELECT COUNT(id) FROM survey_answers) FROM q1", nativeQuery = true)
//   List<Object[]> getQ1AnswerPercentages();

//   @Query(value = "SELECT (COUNT(q1) * 100) / (SELECT COUNT(id) FROM survey_answers) FROM q1", nativeQuery = true)
//   List<Object[]> getQ1AnswerPercentages();



}
