import React from 'react';
import { useState } from 'react';

const Tours = ({tours, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    const readmoreHandler = () => {
        setReadMore(!readMore);
    }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-3 mt-5'>
        {
            tours.map((tour) => {
                return (
                    <div className="w-[300px] border-solid border-2" id={tour.id}>
                        <h1 className='font-semibold text-center py-1'>{tour.name}</h1>
                        <div className='object-contain w-[100%]'>
                          <img className='h-[200px] w-[100%]' src={tour.image} alt={tour.name} />
                        </div>
                        <div className='p-1 text-center'>
                           {readMore ? tour.info : `${tour.info.substring(0, 100)}...`}
                           <span onClick={readmoreHandler}>{readMore ? `show-less` : 'read more'}</span>
                        </div>    
                        <h2 className='text-center'>${tour.price}</h2>
                        <div className='text-center border-solid border-2 mt-2'>
                            <button onClick={() => removeTour(tour.id)}>Not interested</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tours;