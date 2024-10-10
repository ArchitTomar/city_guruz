import React, { useState } from 'react';

const Dropdown = ({ label, options, onChange }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <select className="dropdown-select" onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;