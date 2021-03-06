import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => { 
    axios 
    .get('https://api.generated.photos/api/v1/faces?api_key=-oSJ9MnkYiiimwgLEOefKQ&order_by=random')
    .then(res => {
      const uri = res.data.faces[0].urls[4][512];
      uri && setImage(uri)
    })
    .catch(err => {
    console.log(err.message)
  });
};
    
  return (
    <div className="App">
    <h2> Character Creator </h2>
    <p>&#128512; &#127774; &#127773;</p>

    <h5> AI Generated Characters! </h5>
    {image && <img src={image} alt="CHARACTER FACES" />}
    <button type='button' onClick={handleChange}>
    New Character 
    </button>  
    </div>
  );
}

export default App;
