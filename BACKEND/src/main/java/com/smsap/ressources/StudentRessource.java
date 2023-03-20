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
@Transactional
public class StudentRessource {

    @GET
    public List<Student> list() {
        return Student.listAll();
    }

    @GET
    @Path("/{id}")
    public Student get(@PathParam(value = "id") Long id) {
        return Student.findById(id);
    }
    @POST

    public Response create(Student student) {
        student.persist();
        return Response.created(URI.create("/students/" + student.id)).build();
    }
    @PUT
    @Path("/{id}")
    public Student update(@PathParam(value = "id") Long id,Student app){
        Student entity = Student.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        return entity;
    }

    @DELETE
    @Path("/{id}")
    public void delete(@PathParam(value = "id") Long id) {
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