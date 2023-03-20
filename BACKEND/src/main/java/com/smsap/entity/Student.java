package com.smsap.entity;


import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Inheritance(strategy = InheritanceType.JOINED)
@Entity
public class Student extends Person {



    public static Student findByName(String name) {
        return PanacheEntityBase.find("name", name).firstResult();
    }
}
