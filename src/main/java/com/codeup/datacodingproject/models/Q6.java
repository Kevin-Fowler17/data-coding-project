package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "q6")
public class Q6 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = false)
    private String q6;

    @OneToOne
    @JoinColumn(name = "survey_answers_id")
    private SurveyAnswers surveyAnswers;

//    @ManyToOne
//    @JoinColumn (nullable = false, name = "respondent_id")
//    private Respondent respondent;

}
