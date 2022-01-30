import React from "react";

export default function SearchBar(props) {
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSearchSubmit();
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={(e) => onFormSubmit(e)}>
                <div className="ui field">
                    <label>{props.label}</label>
                    <input
                        type={props.type}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={(e) => props.onInputChange(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}
// Default props
SearchBar.defaultProps  = {
    placeholder: "Search...",
    type: "text",
    label: 'Image Search',
}
