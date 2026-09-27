import Image from 'next/image';
import React from 'react';
import Flogo from '@/assets/logo.png'

const Fotter = () => {
    return (
        <div>
            <div className=' flex justify-between container mx-auto my-[20px]'>
               <Image src={Flogo} alt='Flogo'/>
                <h2>© 2026 FitLog — Workout Library. Train hard, log honest.</h2>
            </div>
        </div>
    );
};

export default Fotter;