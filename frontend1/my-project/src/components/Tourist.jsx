import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Tourist = () => {
  const [selectedState, setSelectedState] = useState('');
  const [cityOptions, setCityOptions] = useState([]);

  const states = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'goa', label: 'Goa' },
    { value: 'rajasthan', label: 'Rajasthan' },
    // Add other states
  ];

  const citiesByState = {
    maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
    goa: ['Panji', 'Vasco da Gama', 'Madgaon', 'Margao'],
    rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner'],
    // Add more cities for other states
  };

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setCityOptions(citiesByState[selected] || []);
  };

  return (
    <div className="tourist">
      <h2>Tourist Page</h2>
      <Dropdown label="Choose a state:" options={states} onChange={handleStateChange} />
      {selectedState && (
        <Dropdown
          label={`Choose a city in ${selectedState}:`}
          options={cityOptions.map(city => ({ value: city, label: city }))}
        />
      )}
    </div>
  );
};

export default Tourist;
