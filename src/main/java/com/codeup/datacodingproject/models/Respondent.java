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
@Table(name = "respondents")
public class Respondent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = false)
    private long respId;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q1> q1s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q2> q2s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q3> q3s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q4> q4s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q5> q5s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q6> q6s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q7> q7s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q8> q8s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q9> q9s;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "respondent")
//    @ToString.Exclude
//    private List<Q10> q10s;
    
}
