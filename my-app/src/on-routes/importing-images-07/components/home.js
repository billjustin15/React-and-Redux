import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// to use an image inside a component is to import the image
import Pokeball from '../pokeball.jpg'

class Home extends Component {
    
    state = {
        posts: [ ]
    }
    componentDidMount() {
        // this is where we will use axios to grab the data

        //get data
        // posts because we want the posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {  // a callback function that fires once the get is complete  
                // take the response data and add it to state.post
                this.setState({
                    // posts: res.data
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts }  = this.state    // grabs the post property from the state
        // checks if post is empty or not
        const postList = posts.length ? (
            // if posts is not empty, we are going to cycle through each one 
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet.</div>
        )

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                { postList }
            </div>
        )
    }
}

export default Home