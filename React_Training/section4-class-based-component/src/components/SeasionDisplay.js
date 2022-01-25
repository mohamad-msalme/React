import './seassionDisplay.css';
import React from "react";

class SeasionDisplay extends React.Component {
    render() {
        const {season} = this.props;
        return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left icon ${this.props.seasonConfig[season].iconName} ${this.props.seasonConfig[season].iconSize}`}></i>
                <h1>{this.props.seasonConfig[season].text}</h1>
                <i className={`icon-right icon ${this.props.seasonConfig[season].iconName} ${this.props.seasonConfig[season].iconSize}`}></i>
            </div>
        )
    }
}
SeasionDisplay.defaultProps = {
    seasonConfig: {
        summer: {
            text: "Let's hit the beach!",
            iconName: 'sun',
            iconSize: 'massive',
        },
        winter: {
            text: "Burr, it's chilly!",
            iconName: 'snowflake',
            iconSize: 'massive',
        },
    }
}
export default SeasionDisplay;