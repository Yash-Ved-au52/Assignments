import React, { useState, useEffect } from 'react';
import Tabs from '../components/Tabs';

import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';

function Home() {
  const [cities, setCities] = useState([
    { id: '1', name: 'City 1' },
    { id: '2', name: 'City 2' },
  ]);

  const [activeCity, setActiveCity] = useState(cities[0]);
  const [properties, setProperties] = useState(propertiesData.properties);

  useEffect(() => {
    const uniqueCities = [...new Set(properties.map((property) => property.city))];
    const citiesData = uniqueCities.map((cityName, index) => ({
      id: `${index + 1}`,
      name: cityName,
    }));
    setCities(citiesData);
  }, [properties]);

  const handleTabClick = (city) =>{
    setActiveCity(city);
  };
  const handleCardClick = (propertyId) => {
    window.location.href = `/property/${propertyId}` ;
  };

  return (
    <div className="home">
      <Tabs cities={cities} activeCity={activeCity} onTabClick={handleTabClick} />
      <div className="property-list">
        { properties.filter((property) => property.city === activeCity.name).map((property) => (
            <PropertyCard key={property.id} property={property} onCardClick={handleCardClick}/>
          ))}
      </div>
    </div>
  );
}

export default Home;
