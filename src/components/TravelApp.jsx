import React, { useState } from 'react';
import data from '../data';
import Tours from './Tours';

const TravelApp = () => {
    const [tours, setTours] = useState(data);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    if(tours.length === 0){
        return (
            <div className='w-11/12 mx-auto text-center'>
                <h1 className='text-3xl mt-10'>No Tours Left</h1>
                <button className='text-2xl mt-10' onClick={() => setTours(data)}>Refresh</button>
            </div>
        )
    }

  return (
    <div className='w-11/12 mx-auto'>
        <h1 className='text-center text-3xl mt-10'>Plan with Love</h1>
        <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default TravelApp;