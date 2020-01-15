import React from 'react'
import SolarSystem from 'solaris-model'

class Sol extends React.Component{
    state = {
        sun: [],
        mercury: [],
        venus: [],
        earth: [],
        mars: [],
        jupiter: [],
        saturn: [],
        uranus: [],
        neptune: [],
        pluto: []
    }

    componentDidMount(){
        this.getSolarSystem()
        this.getSolarSystem()
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

        // let arr = [sunPosition, mercuryPosition, venusPosition, earthPosition, marsPosition]

        this.setState({
            sun: sunPosition,
            mercury: mercuryPosition,
            venus: venusPosition,
            earth: earthPosition,
            mars: marsPosition,
            jupiter: jupiterPosition,
            saturn: saturnPosition,
            uranus: uranusPosition,
            neptune: neptunePosition,
            pluto: plutoPosition
        })

        // return earthPosition
    }

    render(){
        console.log("SOL: ", this.state)
        return(
            <div>

            </div>
        )
    }
}

export default Sol