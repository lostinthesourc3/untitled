import React from 'react'

const DS_KEY = process.env.REACT_APP_DS_KEY

class CurrentWeather extends React.Component{
    state = {
        loc: null,
        currTemp: null,
    }

    

    render(){
        console.log("LOCATION:", this.getPosition())
        
        return(
            <div>

            </div>
        )
    }
}

export default CurrentWeather


// componentDidMount = () => {
//     navigator.geolocation.getCurrentPosition(
//        (position) => {
//           const initialPosition = JSON.stringify(position);
//           this.setState({ initialPosition });
//        },
//        (error) => alert(error.message),
//        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//        const lastPosition = JSON.stringify(position);
//        this.setState({ lastPosition });
//     });
//  }