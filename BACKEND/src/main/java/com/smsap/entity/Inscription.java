package com.smsap.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Inscription extends PanacheEntity {
    @ManyToOne
    private AnneScolaire anneScolaire;

    @OneToOne
    private Student student;

    @OneToOne
    private Classe classe;

    private LocalDate date;

}
