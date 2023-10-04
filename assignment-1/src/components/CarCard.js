import React from 'react';

const CarCard = ({ car }) => (
  <div className="car-card">
    <img src={car.image} alt={car.name} />
    <h3>{car.name}</h3>
    <p>{car.description}</p>
  </div>
);

export default CarCard;