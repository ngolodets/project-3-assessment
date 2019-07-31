import React from 'react';
import './App.css';
import PostsList from './PostsList';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: null,
      userId: 1
    }
    this.handleButtonUpClick = this.handleButtonUpClick.bind(this)
    this.handleButtonDownClick = this.handleButtonDownClick.bind(this)
  }
  
  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/posts?userId=1'
    axios.get(url).then((result) => {
      this.setState({
        posts: result.data
      })
    })
  }

  handleButtonUpClick() {
    let userId = this.state.userId
    if (userId < 10) {
      userId++
      this.setState({
        userId: userId
      })
      let url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId
      axios.get(url).then((result) => {
        this.setState({
          posts: result.data
        })
      })
    } else if (userId === 10) {
      axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then((result) => {
          this.setState({
            posts: result.data,
            userId: 1
          })
        })
  }
}

handleButtonDownClick() {
  let userId = this.state.userId
  if (userId <= 10 && userId > 1) {
    userId--
    this.setState({
      userId: userId
    })
    let url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId
    axios.get(url).then((result) => {
      this.setState({
        posts: result.data
      })
    })
  } else if (userId === 1) {
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=10")
      .then((result) => {
        this.setState({
          posts: result.data,
          userId: 10
        })
      })
}
}

  render() {
    return (
      <>
        <h3>Cycle Through Users:</h3>
        <button type="submit" onClick={this.handleButtonDownClick} id="minus"><i class="arrow left"></i></button>
        <button type="submit" onClick={this.handleButtonUpClick} id="plus"><i class="arrow right"></i></button>
        <PostsList posts={this.state.posts} />
      </>
    )
  }
}

export default App;
