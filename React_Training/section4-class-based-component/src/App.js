import React from 'react';
import SeasionDisplay from './components/SeasionDisplay';
import Spinner from './components/Spinner';
class App extends React.Component {
    state = { season: null, errMessage: null};
    /**
     * 
     */
    componentDidMount() {
        this.getUserLocation();
    }
    /**
     * Get latitude f user and get the current month
     * @returns void
     */
    getUserLocation() {
        const errMessage = 'there is somthing went wrong when get location, please Reset permition and reload page again';
        if(!navigator.geolocation) { 
            throw new Error('location does not provided inside broser');
        }
        const sucess = (position) => this.getSesssion(position.coords.latitude, new Date(position.timestamp).getMonth())        
        const faliure = (err) => this.setState({errMessage})
        navigator.geolocation.getCurrentPosition(sucess, faliure);
    }
    /**
     * determin the seasion if it winter or summer
     * @returns [void]
     */
     getSesssion(latitude, currMonthInd) {
        if(currMonthInd > 2 && currMonthInd < 9) {
            this.setState({season: latitude > 0 ? 'summer' : 'winter'});
        } else {
            this.setState({season: latitude > 0 ? 'winter' : 'summer'});
        }
    }
    /**
     * decide what will be render it on screen
     * @returns {JSX}
     */
    renderCase() {
        if(this.state.errMessage) {
            return <h1>{this.state.errMessage}</h1>
        } else if (this.state.season){
            return <SeasionDisplay season={this.state.season}/>
        } else {
            return <Spinner textLoader="Please Accept Location Request"/>;
        }
    }
    /**
     * 
     * @returns 
     */
    render() {
        return this.renderCase();
    }
}

export default App;