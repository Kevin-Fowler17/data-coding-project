package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="survey_answers")
public class SurveyAnswers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q1 q1;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q2 q2;



}
