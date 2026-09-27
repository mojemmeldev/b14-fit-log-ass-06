import React from 'react';

import { TLibrary } from '@/app/DataTypes/Type';
import LibraryCard from '../shared/LibraryCard';
import { LibraryDataFetch } from '../LIbraryDataShare/LibraryData';





const Library =async() => {
    const datas = await LibraryDataFetch();
    

    return (
         <div className='my-[80px] container mx-auto'>
            <div className='space-y-4 max-w-[400px] mx-auto text-center'>
                <h2 className='font-bold text-3xl'>Installed Apps</h2>
                <p>Explore all trending app on the market developed.</p>
            </div>

            <div className=' mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map((data: TLibrary, ind: number) => {
                        return <LibraryCard key={data.id} data={data} ></LibraryCard>
                            

                    })
                }
            </div>
        </div>
    );
};

export default Library;