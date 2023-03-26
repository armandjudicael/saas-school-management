import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

function ListeEtudiants() {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    axios.get('/api/etudiants')
      .then(response => {
        setEtudiants(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEdit = (id) => {
    // handle edit logic
  };

  const handleDelete = (id) => {
    // handle delete logic
  };

  const sortByName = () => {
    const sortedEtudiants = [...etudiants].sort((a, b) => a.nom.localeCompare(b.nom));
    setEtudiants(sortedEtudiants);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={sortByName}>Nom</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {etudiants ===[] ? etudiants.map((etudiant) => (
            <TableRow key={etudiant.id}>
              <TableCell>{etudiant.nom}</TableCell>
              <TableCell>{etudiant.prenom}</TableCell>
              <TableCell>{etudiant.email}</TableCell>
              <TableCell>
                <Edit onClick={() => handleEdit(etudiant.id)} />
                <Delete onClick={() => handleDelete(etudiant.id)} />
              </TableCell>
            </TableRow>
          )): "La liste est vide"}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListeEtudiants;
