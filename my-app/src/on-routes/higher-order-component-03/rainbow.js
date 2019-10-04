import React from 'react';

const Rainbow = (WrappedComponent) => {
    // if we receive the 'Rainbow' function in one of of the components, then it will receive the component as a parameter
    //  and return it

    const colours = ['red', 'blue', 'green', 'yellow', 'pink'] // stores different color in an array
    // picks a color by randomizing the index number in the colour array
    const randomColour = colours[Math.floor(Math.random() * 5)]
    // appends the color
    const colorClass = randomColour + '-text'

    return (props) => { // this function takes in the props that was passed in the WrappedComponent
        return (
            // imagine the 'about.js' received props from rainbow.js. in order to access and use the inside the component and pass it on the parameter of About we need to pass it in the WrappedComponent below
            <div className={colorClass}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

// and then export
export default Rainbow