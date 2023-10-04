import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyPage from '../components/PropertyPage';
import propertiesData from '../data/properties.json';

function PropertyDetail() {
  const { id } = useParams();
  const propertiesArray = Object.values(propertiesData.properties); // Access the 'properties' property

  const property = propertiesArray.find((p) => p.id === id);

  if(!property) 
  {
    return <div>Property not found</div>;
  }

  return <PropertyPage property={property} />;
}

export default PropertyDetail;