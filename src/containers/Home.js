import React from 'react'
import Clock from './Clock'
import Sol from './Sol'
import CurrentWeather from './CurrentWeather'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Clock />
                <CurrentWeather />
                <Sol />
            </div>
        )
    }
}

export default Home