package com.smsap.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cours extends PanacheEntity{
    @OneToOne
    private Matiere matiere;

    @OneToOne
    private Classe classe;

    @OneToOne
    private Teacher teacher;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDate localDate;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(name = "presence",joinColumns = @JoinColumn(name = "student_id"),inverseJoinColumns = @JoinColumn(name = "cours_id"))
    private List<Student> students;
}
