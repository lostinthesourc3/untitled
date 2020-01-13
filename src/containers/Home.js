import React from 'react'

class Home extends React.Component{
    state = {
        time: "00:00:00",
        date: null
    }

    getTime = () => {
        const addZero = n => n < 10 ? "0" +  n : n
        let d = new Date()

        let day = d.getDate()
        let month = d.getMonth()
        let year = d.getFullYear()
        
        let hour = addZero(d.getHours())
        let min = addZero(d.getMinutes())
        let sec = addZero(d.getSeconds())

        let time = `${hour}:${min}:${sec}`
        let date = `${day} ${month} ${year}`


        this.setState({
            time: time, 
            date: date
        })
    }

    componentDidMount(){
        this.getTime()
        this.interval = setInterval(this.getTime, 1000);
    }

    render(){
        // console.log("TIME:", this.state.time)
        // console.log("DATE:", this.state.date)

        return(
            <div>
                <div className={this.state.time === "00:00:00" ? "time blink" : "time"}> 
                    {this.state.date}
                    <br/>
                    {this.state.time}
                </div>
            </div>
        )
    }
}

export default Home