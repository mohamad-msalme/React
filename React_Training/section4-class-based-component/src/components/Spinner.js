import React from 'react';

const Spinner = (props) => {
    return (
            <div className={`ui dimmer ${props.disabled ? 'disabled' : 'active'}${props.inverted ? 'inverted' : ''}`}>
                <div className= {`ui text loader ${props.size}`}>{props.textLoader}</div>
            </div>
    )
}
Spinner.defaultProps = {
    disabled: false,
    size: 'large',
    textLoader: 'Loading',
    inverted: false,
}
export default Spinner;