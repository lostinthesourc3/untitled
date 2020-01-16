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
        
        let sun = system.bodies.sun.position
        let mercury = system.bodies.mercury.position
        let venus = system.bodies.venus.position
        let earth = system.bodies.earth.position
        let mars = system.bodies.mars.position
        let jupiter = system.bodies.jupiter.position
        let saturn = system.bodies.saturn.position
        let uranus = system.bodies.uranus.position
        let neptune = system.bodies.neptune.position
        let pluto = system.bodies.pluto.position

        this.setState({
            sun: sun,
            mercury: mercury,
            venus: venus,
            earth: earth,
            mars: mars,
            jupiter: jupiter,
            saturn: saturn,
            uranus: uranus,
            neptune: neptune,
            pluto: pluto
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