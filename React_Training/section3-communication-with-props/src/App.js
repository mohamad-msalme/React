import React from 'react';
import {getFakeData} from './util/helper'
import ListApprovalCommentsCards from './components/ListApprovalCommentsCards';
import Comments from './components/Comments';
const App = (props) => {
    return (
        <div style = {{margin: '0 auto', paddingTop: '40px'}}>
            <div className="ui container comments" > 
                <h3 className="ui dividing header">Comments</h3>
                <ListApprovalCommentsCards
                    onApproveClick = {() => console.log('Click on Approval Button')}
                    onRejectClick = {() => console.log('Click on Reject Button')}
                    data= {getFakeData(5)}
                >
                </ListApprovalCommentsCards>
                <Comments data= {getFakeData(3)}></Comments>
            </div>
        </div>
    );
}
export default App;