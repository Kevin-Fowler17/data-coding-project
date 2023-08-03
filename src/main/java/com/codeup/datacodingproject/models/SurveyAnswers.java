package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private List<Q3> q3List;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q4 q4;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q5 q5;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q6 q6;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private List<Q7> q7List;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q8 q8;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q9 q9;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "surveyAnswers")
    @ToString.Exclude
    private Q10 q10;



}
