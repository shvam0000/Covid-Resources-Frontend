import React from 'react';

const Card = () => {
  return (
  <div className="flex justify-center w-screen mt-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img src="https://avatars.githubusercontent.com/u/52779730?v=4" alt="" />
          <h1 className="py-10 text-center font-bold text-xl">Kartik Bansal</h1>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img src="https://avatars.githubusercontent.com/u/60486289?v=4" alt="" />
          <h1 className="py-10 text-center font-bold text-xl">Shivam Shekhar</h1>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img src="https://avatars.githubusercontent.com/u/53421337?v=4" alt="" />
          <h1 className="py-10 text-center font-bold text-xl">Faraz Iqbal</h1>
      </div>
  </div>
  );
};

export default Card;
