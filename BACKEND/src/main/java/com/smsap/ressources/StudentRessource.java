package com.smsap.ressources;


import com.smsap.entity.Student;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("api/v1/students")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StudentRessource {

    @GET
    public List<Student> list() {
        return Student.listAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Student get(Long id) {
        return Student.findById(id);
    }
    @POST
    @Transactional
    public Response create(Student student) {
        student.persist();
        return Response.created(URI.create("/students/" + student.id)).build();
    }
    @PUT
    @Path("/{id}")
    @Transactional
    public Student update(Long id,Student app) {
        Student entity = Student.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        return entity;
    }
    @DELETE
    @Path("/{id}")
    @Transactional
    public void delete(Long id) {
        Student entity = Student.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.delete();
    }

    @GET
    @Path("/search/{name}")
    public Student search(String name) {
        return Student.findByName(name);
    }

    @GET
    @Path("/count")
    public Long count() {
        return Student.count();
    }
}