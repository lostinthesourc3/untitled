import React from 'react'
import Clock from './Clock'
import Sol from './Sol'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Clock />
                <Sol />
            </div>
        )
    }
}

export default Home