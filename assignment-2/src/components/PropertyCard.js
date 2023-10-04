import React from 'react';
import './Card.css';

function PropertyCard({ property, onCardClick }) {
  return (
    <div className="property-card" onClick={() => onCardClick(property.id)}>
      <img  className="card-image" src={property.image} alt={property.name} />
      <h3>{property.name}</h3>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyCard;
