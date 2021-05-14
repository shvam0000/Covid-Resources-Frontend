import React from 'react';

import '../assets/main.css';

const AddResources = () => {
  const resourceTypes = [
    {
      label: 'Ambulance With Oxygen',
      value: 'Ambulance With Oxygen',
    },
    {
      label: 'Ambulance With Oxygen',
      value: 'Ambulance With Oxygen',
    },
    {
      label: 'Ambulance With ICU',
      value: 'Ambulance With ICU',
    },
    {
      label: 'Tiffin Service',
      value: 'Tiffin Service',
    },
    {
      label: 'Flowmetre',
      value: 'Flowmetre',
    },
    {
      label: 'Oxygen Kit',
      value: 'Oxygen Kit',
    },
    {
      label: 'Oxymetre',
      value: 'Oxymetre',
    },
    {
      label: 'Oxygen Refill',
      value: 'Oxygen Refill',
    },
    {
      label: 'Oxygen Concentrators',
      value: 'Oxygen Concentrators',
    },
    {
      label: 'Oxygen Cylinders',
      value: 'Oxygen Cylinders',
    },
    {
      label: 'Cremation',
      value: 'Cremation',
    },
    {
      label: 'Cremation Vehicle',
      value: 'Cremation Vehicle',
    },
    {
      label: 'Bipap (Sale/rent)',
      value: 'Bipap (Sale/rent)',
    },
    {
      label: 'Air Ambulance',
      value: 'Air Ambulance',
    },
    {
      label: 'Ambulance With Ventilator',
      value: 'Ambulance With Ventilator',
    },
    {
      label: 'Isolation Beds',
      value: 'Isolation Beds',
    },
    {
      label: 'Beds Without Oxygen',
      value: 'Beds Without Oxygen',
    },
    {
      label: 'Home ICU',
      value: 'Home ICU',
    },
    {
      label: 'ICU Beds with Ventilators',
      value: 'ICU Beds with Ventilators',
    },
    {
      label: 'ICU Beds without ventilators',
      value: 'ICU Beds without ventilators',
    },
    {
      label: 'Beds with oxygen',
      value: 'Beds with oxygen',
    },
    {
      label: 'Special Helplines',
      value: 'Special Helplines',
    },
    {
      label: 'Home / Lab testing',
      value: 'Home / Lab testing',
    },
    {
      label: 'Home Service',
      value: 'Home Service',
    },
    {
      label: 'Online / tele consultation',
      value: 'Online / tele consultation',
    },
    {
      label: 'Pet Support',
      value: 'Pet Support',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];

  return (
    <div className="flex flex-col justify-items-center items-center mt-20">
      <div className="bg-white w-96 shadow-2xl rounded p-5">
        <form className="space-y-5 mt-5">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>Contact Number</label>
          <input
            type="number"
            placeholder="Enter cities"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>State</label>
          {/* select for state */}
          <label>City</label>
          {/* select for city */}
          <label>Verified at</label>
          <input
            type="text"
            placeholder="Enter Time"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>Type of Resource</label>
          <select className="border border-gray-800 w-full h-12 px-3 focus:outline-none">
            {resourceTypes.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </select>
          <label>Cost of resources</label>
          <input
            type="number"
            placeholder="Enter Cost"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>State</label>
          <input
            type="text"
            placeholder="Enter State"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>Timing</label>
          <input
            type="text"
            placeholder="Enter Time"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <button
            type="submit"
            className="text-white bg-blue-600 w-full h-10 rounded outline-none focus:outline-none hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResources;
