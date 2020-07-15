import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


GifGrid.propTypes = {
    
};

function GifGrid( { category } ) {

   const { data:images, loading } = useFetchGifs(category)

   const renderImages = () => {
        return (
            images.map( img => (
               <GifGridItem key={img.id} {...img} />
            ))
        )
   }

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash"> Cargando...</p>}
            <div className="card-grid">
                    {renderImages()}
            </div>
        </>
    );
}

export default GifGrid;