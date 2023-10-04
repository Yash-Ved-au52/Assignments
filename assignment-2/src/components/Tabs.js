import React from 'react';
// import '../city.css'; // Import the CSS file

function Tabs({ cities, activeCity, onTabClick }) {
  return (
    <div className="tabs">
      {cities.map((city) => (
        <div
          key={city.id}
          className={`tab ${city === activeCity ? 'active' : ''}`}
          onClick={() => onTabClick(city)}
        >
          {city.name}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
