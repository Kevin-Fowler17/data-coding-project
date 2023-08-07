package com.codeup.datacodingproject.repositories;

import com.codeup.datacodingproject.models.Q1;
import com.codeup.datacodingproject.models.SurveyAnswers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.util.List;

public interface SurveyAnswersRepository extends JpaRepository<SurveyAnswers, Long> {

   @Query(value = "SELECT q1.q1, ROUND((COUNT(q1.q1) / (SELECT COUNT(*) FROM q1)) * 100, 0) AS percentage FROM q1 GROUP BY q1.q1", nativeQuery = true)
   List<Object[]> getQ1AnswerPercentages();

}
