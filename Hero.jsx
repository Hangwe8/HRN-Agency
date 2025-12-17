import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext) 

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value
        })
        setIsSearched(true) 
    }

    return (
        <div className=' 2x1:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-blue-600 to bg-green-300 text-white py-16 text-center mx-2 rounded-xl'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Find Your Future</h2>
                <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Discover opportunities curated for the next generation</p>
                <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.search_icon} alt=''/>
                        <input type='text'
                        placeholder='Search for jobs'
                        className='max-sm:text-xs p-2 rounded outline-none w-full' 
                        ref={titleRef}
                        />
                    </div>
                    <div className='flex items-center'>
                        <img  className='h-4 sm:h-5' src={assets.location_icon} alt=''/>
                        <input type='text'
                        placeholder='Location'
                        className='max-sm:text-xs p-2 rounded outline-none w-full' 
                        ref={locationRef}
                        />
                    </div>
                    <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Find</button>
                </div>
            </div>

        
        

        </div>
    )
}

export default Hero;

    