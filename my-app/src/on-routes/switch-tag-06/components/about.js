import React from 'react'
import Rainbow from '../rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam beatae nisi ipsum, in libero repellendus mollitia nemo odio quasi!</p>
        </div>
    )
}

// we wrap it by the higher order component
export default Rainbow(About)