import React from 'react'

export const CommentDetail = (props) => {
    const {author, timeAgo, imgURL, content} = props.commentData;
    return (
        <React.Fragment>
            <div className="comment">
                <a href= "/" className="avatar"><img alt="Avatar" src={imgURL}/></a>
                <div className="content">
                    <a href="/" className="author">{author}</a>
                    <div className="metadata"><span className="date">{timeAgo}</span></div>
                    <div className="text">{content}</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CommentDetail;