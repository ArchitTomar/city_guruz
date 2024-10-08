import React from 'react';

const Dropdown = ({ label, options, onChange }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={onChange}>
        <option value="">--Select--</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
