import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        // id: null
        // when the component first loads up, its going to be null
        // then when componentdidmount fire, we're going to grab the id from the URL and we're going to set the state so the id from the url becomse the state id
        post: null
    }

    // this is where we identify what the route parameter is 
    componentDidMount() {
        // grab the props attached to the route. 'post_id' is the name of the route parameter
        let id = this.props.match.params.post_id
        // appends the id from the route
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    render() {
        // checks if we have a post in the state
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{ this.state.post.title }</h4>
                <p>{ this.state.post.body }</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return(
            <div className="container">
               { post }
            </div>
        )
    }
}

// this will render the posts to every component
export default Post