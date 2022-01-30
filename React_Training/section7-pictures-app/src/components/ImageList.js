import React from "react";
import ImageCard from './ImageCard'
import './imageList.css';
export default function ImageList({images}) {
    return(
        <div className='image-list'>
            {images.map((image) => <ImageCard key={image.id} image={image} />)}
        </div>
    )
}
