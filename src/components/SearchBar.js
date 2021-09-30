import { Paper, TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <Paper elevation={6} style={{ padding: '25px' }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
