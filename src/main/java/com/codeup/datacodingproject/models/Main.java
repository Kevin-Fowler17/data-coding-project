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
@Table(name = "main")
public class Main {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q1;

    @Column(nullable = false)
    private String q2;

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

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_8;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_9;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q4_10;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q5;

    @Column(nullable = false)
    private String q6;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q8;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q9;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q10;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    @ToString.Exclude
    private List<Main> mains;
    
}
