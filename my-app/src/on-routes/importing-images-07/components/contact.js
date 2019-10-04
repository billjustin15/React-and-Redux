import React from 'react'
// just a functional component and will not use state

const Contact = (props) => {    // props is one of the components that the router loads. for any component that the router loads up, the router attaches extra information to the props object
    console.log(props)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam beatae nisi ipsum, in libero repellendus mollitia nemo odio quasi!</p>
        </div>
    )
}

export default Contact