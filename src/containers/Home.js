import React from 'react'

class Home extends React.Component{
    state = {
        time: "00:00:00",
    }

    getTime = () => {
        const addZero = n => n < 10 ? "0" +  n : n

        setInterval(() => {
            let date = new Date()
            let hour = addZero(date.getHours())
            let min = addZero(date.getMinutes())
            let sec = addZero(date.getSeconds())
            let time = `${hour}:${min}:${sec}`

            this.setState({
                time: time
            })
        }, 1000)
    }

    componentDidMount(){
        this.loadInterval = setInterval(
            this.getTime, 1000
        )
    }

    render(){
        // console.log("TIME:", this.state)

        return(
            <div>
                <div className={this.state.time === "00:00:00" ? "time blink" : "time"}> 
                    {this.state.time}
                </div>
            </div>
        )
    }
}

export default Home