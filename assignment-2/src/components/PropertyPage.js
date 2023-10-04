import React from 'react';

function PropertyPage({ property }) {
  if(!property) 
  {
    return <div>Property not found.</div>;
  }

  return(
    <div className="property-page">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <img src={property.image} alt={property.name} />
    </div>
  );
}

export default PropertyPage;
