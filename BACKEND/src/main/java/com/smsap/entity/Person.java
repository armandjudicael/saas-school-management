package com.smsap.entity;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.*;

import javax.persistence.Entity;
import java.util.HashMap;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Person  extends PanacheEntity {
    private String matricule;
    private String name;
    private String addresse;
    private String firstname;
    private Byte[] photo;
    private String numTel;
    private String email;
    private HashMap<String,Byte[]> info;
}
