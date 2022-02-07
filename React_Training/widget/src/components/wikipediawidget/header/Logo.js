import React from "react";
import wikipediaImage from './wikipedia.png'

export default function Logo(props) {
    return (
            <img alt={props.alt} className={`ui ${props.align} ${props.size} image`} src={props.src}/>
    )
}

Logo.defaultProps = {
    size: 'medium',
    align: 'centered',
    src: wikipediaImage,
    alt: 'Logo',
}