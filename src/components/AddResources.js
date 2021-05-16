import React from "react";


const AddResources = () => {
  const stateUT = [
    {
      label: "Andhra Pradesh",
      value: "Andhra Pradesh"
    },
    {
      label: "Arunachal Pradesh",
      value: "Arunachal Pradesh"
    },
    {
      label: "Assam",
      value: "Assam"
    },
    {
      label: "Bihar",
      value: "Bihar"
    },
    {
      label: "Chandigard",
      value: "Chandigard"
    },
    {
      label: "Chattisgarh",
      value: "Chattisgarh"
    },
    {
      label: "Dadra And Nagar Haveli (Union Territory)",
      value: "Dadra And Nagar Haveli (Union Territory)"
    },
    {
      label: "Daman And Diu (Union Territory)",
      value: "Daman And Diu (Union Territory)"
    },
    {
      label: "Delhi",
      value: "Delhi"
    },
    {
      label: "Goa",
      value: "Goa"
    },
    {
      label: "Gujarat",
      value: "Gujarat"
    },
    {
      label: "Haryana",
      value: "Haryana"
    },
    {
      label: "Himachal Pradesh",
      value: "Himachal Pradesh"
    },
    {
      label: "Jammu And Kashmir (Union Territory)",
      value: "Jammu And Kashmir (Union Territory)"
    },
    {
      label: "Jharkhand",
      value: "Jharkhand"
    },
    {
      label: "Karnataka",
      value: "Karnataka"
    },
    {
      label: "Kerala",
      value: "Kerala"
    },
    {
      label: "Ladhak",
      value: "Ladhak"
    },
    {
      label: "Madhya Pradesh",
      value: "Madhya Pradesh"
    },
    {
      label: "Maharashtra",
      value: "Maharashtra"
    },
    {
      label: "Manipur",
      value: "Manipur"
    },
    {
      label: "Meghalaya",
      value: "Meghalaya"
    },
    {
      label: "Nagaland",
      value: "Nagaland"
    },
    {
      label: "Odisha",
      value: "Odisha"
    },
    {
      label: "Pondicherry",
      value: "Pondicherry"
    },
    {
      label: "Punjab",
      value: "Punjab"
    },
    {
      label: "Rajasthan",
      value: "Rajasthan"
    },
    {
      label: "Sikkim",
      value: "Sikkim"
    },
    {
      label: "Tamil Nadu",
      value: "Tamil Nadu"
    },
    {
      label: "Telangana",
      value: "Telangana"
    },
    {
      label: "Uttar Pradesh",
      value: "Uttar Pradesh"
    },
    {
      label: "Uttrakhand",
      value: "Uttrakhand"
    },
    {
      label: "West Bengal",
      value: "West Bengal"
    }
  ]

  const resourceTypes = [
    {
      label: "Ambulance With Oxygen",
      value: "Ambulance With Oxygen",
    },
    {
      label: "Ambulance With Oxygen",
      value: "Ambulance With Oxygen",
    },
    {
      label: "Ambulance With ICU",
      value: "Ambulance With ICU",
    },
    {
      label: "ECMO (Sell/Rent)",
      value: "ECMO (Sell/Rent)",
    },
    {
      label: "Tiffin Service",
      value: "Tiffin Service",
    },
    {
      label: "Flowmetre",
      value: "Flowmetre",
    },
    {
      label: "Oxygen Kit",
      value: "Oxygen Kit",
    },
    {
      label: "Oxymetre",
      value: "Oxymetre",
    },
    {
      label: "Oxygen Refill",
      value: "Oxygen Refill",
    },
    {
      label: "Oxygen Concentrators",
      value: "Oxygen Concentrators",
    },
    {
      label: "Oxygen Cylinders",
      value: "Oxygen Cylinders",
    },
    {
      label: "Cremation",
      value: "Cremation",
    },
    {
      label: "Cremation Vehicle",
      value: "Cremation Vehicle",
    },
    {
      label: "Bipap (Sale/rent)",
      value: "Bipap (Sale/rent)",
    },
    {
      label: "Air Ambulance",
      value: "Air Ambulance",
    },
    {
      label: "Ambulance With Ventilator",
      value: "Ambulance With Ventilator",
    },
    {
      label: "Isolation Beds",
      value: "Isolation Beds",
    },
    {
      label: "Beds Without Oxygen",
      value: "Beds Without Oxygen",
    },
    {
      label: "Home ICU",
      value: "Home ICU",
    },
    {
      label: "ICU Beds with Ventilators",
      value: "ICU Beds with Ventilators",
    },
    {
      label: "ICU Beds without ventilators",
      value: "ICU Beds without ventilators",
    },
    {
      label: "Beds with ECMO",
      value: "Beds with ECMO",
    },
    {
      label: "Beds with oxygen",
      value: "Beds with oxygen",
    },
    {
      label: "Special Helplines",
      value: "Special Helplines",
    },
    {
      label: "Home / Lab testing",
      value: "Home / Lab testing",
    },
    {
      label: "Medicine",
      value: "Medicine",
    },
    {
      label: "Home Service",
      value: "Home Service",
    },
    {
      label: "Online / tele consultation",
      value: "Online / tele consultation",
    },
    {
      label: "Pet Support",
      value: "Pet Support",
    },
    {
      label: "Ventilator (Sell/Rent)",
      value: "Ventilator (Sell/Rent)",
    },
    {
      label: "Others",
      value: "Others",
    },
  ];

  function sortBy(field) {
    return function (a, b) {
      return (a[field] > b[field]) - (a[field] < b[field]);
    };
  }

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
          <select className="border border-gray-800 w-full h-12 px-3 focus:outline-none">
            {stateUT.sort(sortBy("label")).map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </select>
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>Verified at</label>
          <input
            type="text"
            placeholder="Enter Date & Time"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <label>Type of Resource</label>
          <select className="border border-gray-800 w-full h-12 px-3 focus:outline-none">
            {resourceTypes.sort(sortBy("label")).map((option) => (
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
