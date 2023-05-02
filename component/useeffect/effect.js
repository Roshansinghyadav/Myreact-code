import { useState, useEffect, useRef } from 'react';

export function Effect() {
  const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg');
  const counterRef = useRef(0);

  useEffect(() => {
    counterRef.current = counterRef.current + 1;
  }, [imageUrl]);

  const handleImageChange = () => {
    setImageUrl('https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=600');
  };

  return (
    <div>
      <img src={imageUrl} alt="placeholder" />
      <button onClick={handleImageChange}>Change Image</button>
      
    </div>
  );
}

