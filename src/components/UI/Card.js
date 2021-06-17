import React from 'react';

const Card = (props) => {
  return (
    <div className='flex lg:flex-row md:flex-col sm:flex-col justify-center content-center mt-8'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg mx-2'>
        <img src={props.src} alt={props.name} />
        <h1 className='py-10 text-center font-bold text-xl'>{props.name}</h1>
      </div>
    </div>
  );
};

export default Card;
