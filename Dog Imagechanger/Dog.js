import React, { useState, useEffect } from 'react';
import axios from 'axios';

 export function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setImageUrl(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Random Dog" />
    </div>
  );
}

export default DogImage;