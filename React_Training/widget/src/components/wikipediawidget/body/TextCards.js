import React from "react";
import TextCard from "./TextCard";

export default function TextCards({items}) {

    const renderList = () => items.map((item, ind) => <TextCard item={item} key={item.key || ind} />)

    return (
        <div className="ui segments" style={{margin: '10px 10px'}}>
            {renderList()}
        </div>
    )
}