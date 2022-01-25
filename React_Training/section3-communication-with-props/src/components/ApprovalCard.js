import React from "react";

const ApprovalCard = (props) => {
    const {onApproveClick, onRejectClick} = props;
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={onApproveClick}>Approve</div>
                        <div className="ui basic red button" onClick={onRejectClick}>Decline</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ApprovalCard;