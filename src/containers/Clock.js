import React from 'react'

class Clock extends React.Component{
    state = {
        time: "00:00:00",
        date: "January 1, 2020",
    }


    componentDidMount(){
        // this.getTime()
        this.getDate()
        this.timeInterval = setInterval(() => this.getTime(), 1000)
        // this.dateInterval = setInterval(() => this.getDate(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
        // clearInterval(this.dateInterval)
    }

    getNewDate = () => {
        let d = new Date()
        return d
    }

    getTime = () => {
        const addZero = (n) => n < 10 ? "0" +  n : n
        let d = this.getNewDate()
        
        let hour = addZero(d.getHours())
        let min = addZero(d.getMinutes())
        let sec = addZero(d.getSeconds())

        let time = `${hour}:${min}:${sec}`

        this.setState({
            time: time, 
        })
    }

    getDate = () => {
        let d = this.getNewDate()

        let day = d.getDate()
        let month = d.getMonth() + 1
        let year = d.getFullYear()

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
            default:
                break
        }

        let date = `${month} ${day}, ${year}`

        this.setState({
            date: date, 
        })        
    }

    render(){
        return(
            <div> 
                {this.state.date}
                <br/>
                {this.state.time}
            </div>
        )
    }
}

export default Clock