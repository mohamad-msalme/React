import React from "react";


export default function TextCard({item}) {
    return (
        <div className="ui padded  blue segment">
            <h4 className="ui header">{item.title}</h4>
            <p>{item.content}</p>
        </div>
    )
}