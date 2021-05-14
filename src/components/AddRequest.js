import React from 'react';

const AddRequest = () => {
  return (
    <div className="flex flex-col justify-items-center items-center mt-20">
      <div>
      <h1 className="text-xl">Enter all the details and we'll contact you soon</h1>
      </div>
      <div className="bg-white w-96 shadow-2xl rounded p-5">
        <form className="space-y-5 mt-5">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Requirement"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Pincode"
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
