package com.codeup.datacodingproject.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "q10")
public class Q10 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = false, columnDefinition = "INT(10)")
    private long q10;

//    @ManyToOne
//    @JoinColumn (nullable = false, name = "respondent_id")
//    private Respondent respondent;

}
