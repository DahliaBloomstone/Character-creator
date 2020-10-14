import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => { 
    axios 
    .get('https://api.generated.photos/api/v1/faces?api_key=-oSJ9MnkYiiimwgLEOefKQ')
    .then(res => {
      const uri = res.data.faces
      uri && setImage(uri)
    })
    .catch(err => {
    console.log(err.message)
  });
};
    
  return (
    <div className="App">
    <h1> Character Creator </h1>
    {image && <img src={image} alt="CHARACTER FACES" />}
    <button type='button' onClick={handleChange}>
    New Character 
    </button> 
    </div>
  );
}

export default App;
