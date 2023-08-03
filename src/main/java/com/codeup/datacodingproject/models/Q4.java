package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "q4")
public class Q4 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_1;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_2;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_3;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_4;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_5;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_6;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_7;

    @Column(nullable = true, columnDefinition = "INT(10)")
    private long q4_97;

    @OneToOne
    @JoinColumn(name = "survey_answers_id")
    private SurveyAnswers surveyAnswers;

//    @ManyToOne
//    @JoinColumn (nullable = false, name = "respondent_id")
//    private Respondent respondent;

}
