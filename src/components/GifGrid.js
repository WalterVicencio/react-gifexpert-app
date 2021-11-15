import React from 'react';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


    const {data:imagenes,loading}=useFetchGifs(category);
    console.log(loading);

    return (
        <>
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            {loading && <p>Loading</p>}
            
            <div className="card-grid">
                
                    {
                        imagenes.map( img =>(
                            <GifGridItem 
                            key={img.id}
                            {...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}
