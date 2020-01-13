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
        let month = d.getMonth() + 1
        let year = d.getFullYear()
        
        let hour = addZero(d.getHours())
        let min = addZero(d.getMinutes())
        let sec = addZero(d.getSeconds())

        switch(month){
            case 1:
                month = "January"
                break
            case 2:
                month = "February"
                break
            case 3:
                month = "March"
                break
            case 4:
                month = "April"
                break
            case 5:
                month = "May"
                break
            case 6:
                month = "June"
                break
            case 7:
                month = "July"
                break
            case 8:
                month = "August"
                break
            case 9:
                month = "September"
                break
            case 10:
                month = "October"
                break
            case 11:
                month = "November"
                break
            case 12:
                month = "December"
                break
        }

        let time = `${hour}:${min}:${sec}`
        let date = `${month} ${day}, ${year}`

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