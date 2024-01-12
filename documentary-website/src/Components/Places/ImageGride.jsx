import React, { useState } from 'react';
import './ImageGride.css';
import image1 from '../../Assests/image1.jpg'
import image2 from '../../Assests/image2.jpg'
import image3 from '../../Assests/image3.jpg'


const ImageGrid = () => {
  const imageData = [
    { id: 1, src: image1, alt: 'Image 1', 
    content: 'The Nine Arch Bridge, located in Ella, Sri Lanka, is an architectural marvel set amidst the lush greenery of the Ella jungle. This iconic bridge is renowned for its distinctive nine beautifully crafted arches, which give it a unique and picturesque appearance.', 
    name:'Nine Arch Brigde'},
    { id: 2, src: image2, alt: 'Image 2', content: 'Ravana Ella Waterfall in Sri Lanka, near Ella, is a stunning natural wonder with cascading waters, lush green surroundings, and cultural ties to King Ravana of the Ramayana. Falling from a height of 25 meters, it captivates with its scenic beauty and legendary history.', name:'Rawana Ella Waterfall'},
    { id: 3, src: image3, alt: 'Image 3', content: 'Little Adam\'s Peak in Ella, Sri Lanka, offers a scenic trek through tea plantations, culminating in panoramic views of lush valleys. The summit, easily accessible, promises a tranquil escape with breathtaking vistas of mist-covered mountains during sunrise or sunset.', name:'Little Adam\'s Peak'},
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      {imageData.map((image) => (
        <div className="column" key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
          />

          {selectedImage === image && (
            <div className="overlay">
            </div>
          )}
          <span className="image-text">{image.name}</span>
          <span className="overlay-text">{image.content}</span>
        </div>
      ))}
    </div>
    
  );
;}
export default ImageGrid;