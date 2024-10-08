import React, { useState } from 'react';
import Dropdown from './Dropdown.jsx';
import './Tourist.css';
// import videofile from '../videos/city-video.mp4';

const Tourist = () => {
  const [selectedState, setSelectedState] = useState('');
  const [cityOptions, setCityOptions] = useState([]);

  const states = [
    { "value": "andhra_pradesh", "label": "Andhra Pradesh" },
    { "value": "arunachal_pradesh", "label": "Arunachal Pradesh" },
    { "value": "assam", "label": "Assam" },
    { "value": "bihar", "label": "Bihar" },
    { "value": "chhattisgarh", "label": "Chhattisgarh" },
    { "value": "goa", "label": "Goa" },
    { "value": "gujarat", "label": "Gujarat" },
    { "value": "haryana", "label": "Haryana" },
    { "value": "himachal_pradesh", "label": "Himachal Pradesh" },
    { "value": "jammu_kashmir", "label": "Jammu & Kashmir" },
    { "value": "jharkhand", "label": "Jharkhand" },
    { "value": "karnataka", "label": "Karnataka" },
    { "value": "kerala", "label": "Kerala" },
    { "value": "madhya_pradesh", "label": "Madhya Pradesh" },
    { "value": "maharashtra", "label": "Maharashtra" },
    { "value": "manipur", "label": "Manipur" },
    { "value": "meghalaya", "label": "Meghalaya" },
    { "value": "mizoram", "label": "Mizoram" },
    { "value": "nagaland", "label": "Nagaland" },
    { "value": "odisha", "label": "Odisha" },
    { "value": "punjab", "label": "Punjab" },
    { "value": "rajasthan", "label": "Rajasthan" },
    { "value": "sikkim", "label": "Sikkim" },
    { "value": "tamil_nadu", "label": "Tamil Nadu" },
    { "value": "telangana", "label": "Telangana" },
    { "value": "tripura", "label": "Tripura" },
    { "value": "uttar_pradesh", "label": "Uttar Pradesh" },
    { "value": "uttarakhand", "label": "Uttarakhand" },
    { "value": "west_bengal", "label": "West Bengal" },
    { "value": "andaman_nicobar", "label": "Andaman & Nicobar Islands" },
    { "value": "chandigarh", "label": "Chandigarh" },
    { "value": "dadra_nagar_haveli_daman_diu", "label": "Dadra & Nagar Haveli and Daman & Diu" },
    { "value": "delhi", "label": "Delhi" },
    { "value": "lakshadweep", "label": "Lakshadweep" },
    { "value": "puducherry", "label": "Puducherry" }
  ];

  const citiesByState = {
    maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
    goa: ['Panji', 'Vasco da Gama', 'Madgaon', 'Margao'],
    gujrat: ['Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner'],
    jammukashmir: ['Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner'],
    rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner'],
    kerala: ['Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner'], 
  };

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setCityOptions(citiesByState[selected] || []);
  };

  return (
    <>
    <div className='main1'>
    <h1>Explore the world with CityGuruz</h1>
    <div className="tourist">
      <h2>Tourist Page</h2>
      <Dropdown className="dropdown" label="Choose a state:" options={states} onChange={handleStateChange} />
      {selectedState && (
        <Dropdown className="dropdown"
          label={`Choose a city in ${selectedState}:`}
          options={cityOptions.map(city => ({ value: city, label: city }))} />
      )}
    </div>
    </div>
    <div className="bg" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/d8/d4/4b/d8d44bb3444f13d55057c39401221a65.gif)' }}>  
    </div>
    </>
  );
};

export default Tourist;