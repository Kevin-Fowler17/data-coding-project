package com.codeup.datacodingproject.repositories;

import com.codeup.datacodingproject.models.Q1;
import com.codeup.datacodingproject.models.SurveyAnswers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.util.List;

public interface SurveyAnswersRepository extends JpaRepository<SurveyAnswers, Long> {

   // percentages without labels
//   @Query(value = "SELECT q1.q1, ROUND((COUNT(q1.q1) / (SELECT COUNT(*) FROM q1)) * 100, 0) AS percentage FROM q1 GROUP BY q1.q1", nativeQuery = true)
//   List<Object[]> getQ1AnswerPercentages();

//   // percentages with labels
//   @Query(value = "SELECT q1_labels.name, ROUND((COUNT(q1.q1) / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
//           "FROM q1 " +
//           "JOIN q1_labels ON q1.q1 = q1_labels.id " +
//           "GROUP BY q1_labels.name", nativeQuery = true)
//   List<Object[]> getQ1AnswerPercentages();
//
//   @Query(value = "SELECT q3_labels.name, ROUND((COUNT(q3.q3) / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
//           "FROM q3 " +
//           "JOIN q3_labels ON q3.q3 = q3_labels.id " +
//           "GROUP BY q3_labels.name", nativeQuery = true)
//   List<Object[]> getQ3AnswerPercentages();
//
//   @Query(value = "SELECT q5_labels.name, ROUND((COUNT(q5.q5) / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
//           "FROM q5 " +
//           "JOIN q5_labels ON q5.q5 = q5_labels.id " +
//           "GROUP BY q5_labels.name", nativeQuery = true)
//   List<Object[]> getQ5AnswerPercentages();
//
//   @Query(value = "SELECT q7_labels.name, ROUND((COUNT(q7.q7) / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
//           "FROM q7 " +
//           "JOIN q7_labels ON q7.q7 = q7_labels.id " +
//           "GROUP BY q7_labels.name", nativeQuery = true)
//   List<Object[]> getQ7AnswerPercentages();
//
//   @Query(value = "SELECT q9_labels.name, ROUND((COUNT(q9.q9) / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
//           "FROM q9 " +
//           "JOIN q9_labels ON q9.q9 = q9_labels.id " +
//           "GROUP BY q9_labels.name", nativeQuery = true)
//   List<Object[]> getQ9AnswerPercentages();
//
//   @Query(value = "SELECT q10_labels.name, ROUND((COUNT(q10.q10) / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
//           "FROM q10 " +
//           "JOIN q10_labels ON q10.q10 = q10_labels.id " +
//           "GROUP BY q10_labels.name", nativeQuery = true)
//   List<Object[]> getQ10AnswerPercentages();

   @Query(value = "SELECT CONCAT('q', :questionNumber, '_labels.name'), " +
           "ROUND((COUNT(q.q' || :questionNumber || ') / (SELECT COUNT(*) FROM survey_answers)) * 100, 0) AS percentage " +
           "FROM q' || :questionNumber || ' " +
           "JOIN q' || :questionNumber || '_labels ON q.q' || :questionNumber || ' = q' || :questionNumber || '_labels.id " +
           "GROUP BY q' || :questionNumber || '_labels.name", nativeQuery = true)
   List<Object[]> getQAnswerPercentages(int questionNumber);




}
