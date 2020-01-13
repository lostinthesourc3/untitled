import React from 'react'
import SolarSystem from 'solaris-model'

class Home extends React.Component{
    state = {
        time: "00:00:00",
        date: null,
    }

    componentDidMount(){
        this.getTime()
        this.interval = setInterval(this.getTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTime = () => {
        const addZero = (n) => n < 10 ? "0" +  n : n
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
            default:
                break
        }

        let time = `${hour}:${min}:${sec}`
        let date = `${month} ${day}, ${year}`

        this.setState({
            time: time, 
            date: date,
        })
    }

    getSolarSystem = () => {
        let system = new SolarSystem()
        
        let sun = system.bodies.sun
        let mercury = system.bodies.mercury
        let venus = system.bodies.venus
        let earth = system.bodies.earth
        let mars = system.bodies.mars 
        let jupiter = system.bodies.jupiter 
        let saturn = system.bodies.saturn 
        let uranus = system.bodies.uranus 
        let neptune = system.bodies.neptune 
        let pluto = system.bodies.pluto

        let sunPosition = sun.position
        let mercuryPosition = mercury.position
        let venusPosition = venus.position
        let earthPosition = earth.position
        let marsPosition = mars.position
        let jupiterPosition = jupiter.position 
        let saturnPosition = saturn.position
        let uranusPosition = uranus.position
        let neptunePosition = neptune.position
        let plutoPosition = pluto.position

        // this.setState({
            // sun: sunPosition,
            // mercury: mercuryPosition,
            // venus: venusPosition,
            // earth: earthPosition,
            // mars: marsPosition,
            // jupiter: jupiterPosition,
            // saturn: saturnPosition,
            // uranus: uranusPosition,
            // neptune: neptunePosition,
            // pluto: plutoPosition
        // })

        return earthPosition
    }



    render(){
        // console.log("TIME:", this.state.time)
        // console.log("DATE:", this.state.date)
        // console.log("TIME:", this.state)
        // console.log("EARTH POSITION: ", this.getSolarSystem())

        return(
            <div>
                <div className={this.state.time === "00:00:00" ? "time blink" : "time"}> 
                    {this.state.date}
                    <br/>
                    {this.state.time}
                    <br/>
                    {this.getSolarSystem()}
                </div>
            </div>
        )
    }
}

export default Home