import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './NewPost.css';
import Button from '@material-ui/core/Button';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    isSubmitted: false,
  };

  componentDidMount() {
    console.log(this.props);
  }
  postDataHandler = () => {
    let data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts/', data)
      .then((res) => {
        //      this.setState({isSubmitted:true});
        this.props.history.push('/posts');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let redirect = null;

    if (this.state.isSubmitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        {/* <button onClick={this.postDataHandler}>Add Post</button> */}
        <Button onClick={this.postDataHandler} className="primary">
          Default
        </Button>
      </div>
    );
  }
}

export default NewPost;
