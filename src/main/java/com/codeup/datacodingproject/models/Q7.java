package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="q7")
public class Q7 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column
    private long q7;

    @Column(nullable = true)
    private String q7os;

    @ManyToOne
    @JoinColumn(name = "survey_answers_id")
    private SurveyAnswers surveyAnswers;

//    @ManyToOne
//    @JoinColumn (nullable = false, name = "respondent_id")
//    private Respondent respondent;

}
