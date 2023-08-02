package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "q1")
public class Q1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q1;

    @Column(nullable = true)
    private String q1os;

    @OneToOne
    @JoinColumn(name = "survey_answers_id")
    private SurveyAnswers surveyAnswers;

//    @ManyToOne
//    @JoinColumn (nullable = false, name = "respondent_id")
//    private Respondent respondent;

}
