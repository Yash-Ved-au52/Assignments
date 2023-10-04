import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import data from './data/cars.json';
import './App.css';

const App = () => {
  const [cars, setCars] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  useEffect(() => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const displayedCars = cars.slice(startIndex, endIndex);
    // Update the displayed cars state
    setDisplayedCars(displayedCars);
  }, [currentPage, cars]);

  const [displayedCars, setDisplayedCars] = useState([]);

  const handlePageChange = (newPage) =>{
    setCurrentPage(newPage);
  };

  const handleSearch = (searchTerm) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    
    setCurrentPage(1);
  };

  return (
    <Router>
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/page/:page" element={<CarList cars={displayedCars} currentPage={currentPage} carsPerPage={carsPerPage} />}/>
        <Route path="/" element={<CarList cars={displayedCars} currentPage={currentPage} carsPerPage={carsPerPage} />}/>
      </Routes>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(cars.length / carsPerPage)} onPageChange={handlePageChange}/>
    </Router>
  );
};

export default App;
