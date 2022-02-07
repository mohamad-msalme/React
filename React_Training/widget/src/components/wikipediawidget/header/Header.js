import React from 'react';

import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header(props) {
    return (
        <div className="ui segment">
            <Logo />
            <SearchBar 
                value={props.search} 
                label={props.label} 
                onInputChange={props.onInputChange} 
                onSearchSubmit={props.onSearchSubmit}
            />
        </div>
    )
}