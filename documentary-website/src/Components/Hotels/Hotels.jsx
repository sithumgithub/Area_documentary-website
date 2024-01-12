import React from 'react';
import './Hotels.css'; 
import image7 from '../../Assests/image7.jpg'
import image8 from '../../Assests/image8.jpg'
import image9 from '../../Assests/image9.jpg'
import {MdPlace} from 'react-icons/md'
import {CiStar} from 'react-icons/ci'

const Hotels = () => {
  const data = [
    {
      id: 1,
      image: image7, 
      name: 'Hotel Onrock',
      rating: 3.8,
    },
    {
      id: 2,
      image: image8, 
      name: 'Inspira Ella',
      rating: 4.3,
    },
    {
      id: 3,
      image: image9, 
      name: 'Ella Forest Paradise',
      rating: 4.1,
    },
  ];

  return (
    <div className="container1">
      {data.map((item) => (
        <div className="column" key={item.id}>
          <div className="rounded-rectangle">
            <img src={item.image} alt={item.name} />
            <div className="overlay">
              <MdPlace className="place-icon"/>
              <h3 className="place-name">{item.name}</h3>
              <div className="rating">
                <CiStar className="star-icon"/>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Hotels;

