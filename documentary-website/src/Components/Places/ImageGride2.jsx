import React, { useState } from 'react';
import './ImageGride2.css';
import image4 from '../../Assests/image4.jpg'
import image5 from '../../Assests/image5.jpg'
import image6 from '../../Assests/image6.jpg'

const ImageGrid = () => {
  const imageData = [
    { id: 4, src: image4, alt: 'Image 4', content: 'Bomburu Ella Waterfall in Sri Lanka is a mesmerizing cascade surrounded by lush greenery. With multiple tiers, it creates a serene atmosphere, making it a picturesque and tranquil destination for nature lovers and those seeking the beauty of Sri Lanka\'s central highlands.', name:'Bomburu Ella Waterfall'},
    { id: 5, src: image5, alt: 'Image 5', content: 'Yudaganawa Rajamaha Viharaya in Buttala, Sri Lanka, is an ancient Buddhist temple steeped in history. The site features impressive architectural ruins, serene surroundings, and a sense of spiritual tranquility, inviting visitors to explore its cultural richness and historical significance.', name:'Yudaganawa Rajamaha Viharaya'},
    { id: 6, src: image6, alt: 'Image 6', content: 'Madolsima Mini World\'s End in Sri Lanka offers a breathtaking view resembling the famous World\'s End in Horton Plains. Perched on the edge, it provides panoramic vistas of lush valleys, making it a miniature marvel for nature enthusiasts seeking captivating landscapes in a serene setting.', name:'Madolsima Mini World\'s End'},
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
          <span className="image-text1">{image.name}</span>
          <span className="overlay-text1">{image.content}</span>
        </div>
      ))}
    </div>
    
  );
;}
export default ImageGrid;