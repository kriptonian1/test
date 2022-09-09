import React from 'react'
import { pf } from '../assets'

const Navbar = () => {
    return (
        <div className='flex justify-between m-10 '>
            <div className='text-xl font-semibold'>
                Propertybhavan
            </div>

            <div className='flex space-x-5'>
                <div>
                    Home
                </div>
                <div>
                    List your Property
                </div>
                <div>
                    Blog
                </div>
                <img src={pf} alt="pf" />
            </div>

            

        </div>
    )
}

export default Navbar