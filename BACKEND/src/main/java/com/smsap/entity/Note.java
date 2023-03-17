package com.smsap.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Note extends PanacheEntity {
    private Double value;

    @Enumerated(EnumType.ORDINAL)
    private NoteType noteType;

    @ManyToOne
    private Student student;

    @ManyToOne
    private AnneScolaire anneScolaire;
}
