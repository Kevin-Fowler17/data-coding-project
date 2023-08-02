package com.codeup.datacodingproject.repositories;

import com.codeup.datacodingproject.models.SurveyAnswers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyAnswersRepository extends JpaRepository<SurveyAnswers, Long> {
}
