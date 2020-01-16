import React from 'react'

const DS_KEY = process.env.REACT_APP_DS_KEY

class CurrentWeather extends React.Component{
    state = {
        loc: null,
        currTemp: null,
    }


    getGeolocation = () => {
        navigator.geolocation.getCurrentPosition((location) => {
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);
            console.log(location.coords.accuracy);
        });
    }


    render(){
        console.log(this.getGeolocation())
        
        return(
            <div>

            </div>
        )
    }
}

export default CurrentWeather