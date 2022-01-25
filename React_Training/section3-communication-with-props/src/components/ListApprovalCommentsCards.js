import React from 'react';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';


const ListApprovalCommentsCards = ({data, onApproveClick, onRejectClick}) => {
    const createApprovalCommentCards = ()=> data.map((commentData, key) => (
        <ApprovalCard
            onApproveClick = {onApproveClick}
            onRejectClick = {onRejectClick}
            key={key}
        >
            <CommentDetail commentData= {commentData} key={key}/>
        </ApprovalCard>
    ));
    return (
        <React.Fragment>
            {createApprovalCommentCards()}
        </React.Fragment>
        
    )
}

export default ListApprovalCommentsCards;