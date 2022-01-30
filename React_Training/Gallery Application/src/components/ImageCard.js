import React, {useRef, useEffect, useState} from "react";

export default function ImageList({image, alt}) {
    const [span, setSpan] = useState(2);
    const refImage = useRef()
    useEffect(() => refImage.current.addEventListener('load', () => setSpan(Math.trunc(refImage.current.clientHeight/10))), [])

    return (
        <div style={{gridRowEnd: `span ${span}`}}>
            <img ref={refImage} alt={image.alt || alt} src={image.src}/>
        </div>
    ) 
}

ImageList.defaultProps = {
    alt: ''
}