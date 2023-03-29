import React, { useState } from "react";
import axios from "axios";
import {Navigate } from "react-router-dom";
import { TextField, Button, Grid, Typography, Container, Box, FormControl,InputLabel,Input } from "@mui/material";


export default function SignUp() {
  
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    nomEcole: "",
    logo: "",
    email: "",
    adresse: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstname: values.firstname,
      lastname: values.lastname,
      nomEcole: values.nomEcole,
      logo: values.logo,
      email: values.email,
      adresse:values.adresse,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    axios.post(`${process.env.REACT_APP_URLBACK}/signup`, data)
      .then((response) => {
        console.log(response);
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="fname"
                value={values.firstname}
                onChange={handleChange("firstname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                value={values.lastname}
                onChange={handleChange("lastname")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nomEcole"
                label="Nom de l'école"
                name="nomEcole"
                autoComplete="nomEcole"
                value={values.nomEcole}
                onChange={handleChange("nomEcole")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="adresse"
                label="Addresse"
                name="adresse"
                autoComplete="adresse"
                value={values.adresse}
                onChange={handleChange("adresse")}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="file">Logo</InputLabel>
              <FormControl fullWidth>
              
                <Input
                  variant="outlined"
                  id="file"
                  type="file"
                  name="file"
                  value={values.logo}
                  onChange={handleChange("logo")}ptypes de fichiers acceptés
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
              />
            </Grid>
          </Grid>
          <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        
      >
        Sign Up
      </Button>
    </form>
  </Box>
</Container>
  )};
