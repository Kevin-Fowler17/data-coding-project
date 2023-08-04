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
@Table(name = "q1_labels")
public class Q1Labels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT(10) UNSIGNED")
    private long id;

    @Column(nullable = true)
    private String name;

    @OneToMany(mappedBy = "label")
    private List<Q1> q1List;

}
