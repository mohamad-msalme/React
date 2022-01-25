import React from 'react';
import CommentDetail from './CommentDetail';


const Comments = (props) => {
    const createComments = ()=> props.data.map((commentData, key) => <CommentDetail commentData= {commentData} key={key}/>);
    return (
        <React.Fragment>
            {createComments()}
        </React.Fragment>
    )
}
export default Comments;