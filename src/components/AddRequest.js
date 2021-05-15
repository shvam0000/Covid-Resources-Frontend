import React from 'react';

import '../assets/main.css'

const AddRequest = () => {
  return (
    <div className="flex flex-col justify-items-center items-center mt-20">
      <div>
      <h1 className="text-xl">Enter all the details and we'll contact you soon</h1>
      </div>
      <div className="bg-white w-96 shadow-2xl rounded p-5">
        <form className="space-y-5 mt-5">
          <label className="mt-5">Name of the patient</label>
          <input
            type="text"
            placeholder="Enter Name of the Patient"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-10">Name of the Person Contacting us</label>

          <input
            type="text"
            placeholder="Enter Name of the Person Contacting us"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">Gender</label>
          <select className="border border-gray-800 w-full h-12 px-3 focus:outline-none">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>  
          <label className="mt-">Location</label>
          <input
            type="text"
            placeholder="Enter Location"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">Oxygen (SPO2) Level</label>
          <input
            type="text"
            placeholder="Enter Oxygen (SPO2) Level"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">Comorbidities</label>
          <input
            type="text"
            placeholder="Enter Comorbidities"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">Physical Discomfort</label>
          <input
            type="text"
            placeholder="Enter Physical Discomfort"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">What is this request for?</label>
          <input
            type="text"
            placeholder="Enter What is this request for?"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label className="mt-5">Is transport available?</label>
          <select className="border border-gray-800 w-full h-12 px-3 focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label className="mt-5">Anything else you want us to know?</label> 
          <input
            type="text"
            placeholder="Enter Anything else you want us to know?"
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

export default AddRequest;
