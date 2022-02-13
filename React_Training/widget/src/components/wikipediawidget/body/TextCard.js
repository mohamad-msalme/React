import React from "react";


export default function TextCard({item}) {
    const Button = () => {
        return (
            <div className="ui right floated content" >
                <a className="ui button" href={`http://en.wikipedia.org?curid=${item.pageId}`}>
                    GO
                </a>
            </div>
        )
    }
    return (
        <div className="ui padded blue segment">
            <h4 className="ui header">{item.title}</h4>
            <p>
                <span dangerouslySetInnerHTML={{__html: item.content}}></span>
            </p>
            <Button/>
        </div>
    )
}