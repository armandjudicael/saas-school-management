import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../../../Ressource/Style/registre.css";

const Enregistrer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server
  };

  return (
    <div className='contenair'>
      <div className='row justify-content-center'>
        <h1 className='titre'>Formulaire d'inscription</h1>
        <div className='col-md-6'>

            <Form onSubmit={handleSubmit}>
              <div className='ctr'>

                <Form.Group controlId="formName" className='col-md-6'>
                  <Form.Label>Nom </Form.Label>
                  <Form.Control type="text" placeholder="Entrez votre nom complet" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formName" className='col-md-6'>

                  <Form.Label>Nom </Form.Label>
                  <Form.Control type="text" placeholder="Entrez votre prenom" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              </div>
              

              <Form.Group controlId="formEmail">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formUsername">
                <Form.Label>Nom d'utilisateur</Form.Label>
                <Form.Control type="text" placeholder="Entrez un nom d'utilisateur unique" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formDateOfBirth">
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control type="date" placeholder="Entrez votre date de naissance" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formGender">
                <Form.Label>Genre</Form.Label>
                <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Choisissez votre genre</option>
                  <option value="male">Masculin</option>
                  <option value="female">Feminin</option>
                </Form.Control>
              </Form.Group>

            <Form.Group controlId="formProofOfResidence">
              <Form.Label>Certificat de résidence</Form.Label>
              <Form.Control type="file" accept=".pdf, .jpg, .jpeg, .png" />
            </Form.Group>

            <Form.Group controlId="formBirthCertificate">
              <Form.Label>Acte de naissance</Form.Label>
              <Form.Control type="file" accept=".pdf, .jpg, .jpeg, .png" />
            </Form.Group>

            <Form.Group controlId="formSchoolRecords">
              <Form.Label>Relevés de notes ou bulletins scolaires des années précédentes</Form.Label>
              <Form.Control type="file" accept=".pdf, .jpg, .jpeg, .png" />
            </Form.Group>

            <Button variant="primary" type="submit">Ajouter</Button>

            </Form>
        </div>
      </div>
    </div>
);
};

export default Enregistrer;

