import React, { Component } from 'react';
import{Route,NavLink,Switch,Redirect} from 'react-router-dom';
import  Posts from './posts/posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import asyncComponent from '../../hoc/asynComponent';

const asynNewPost = asyncComponent(() => {
  return  import('./NewPost/NewPost')
}) 



class Blog extends Component {

 
    state = {
        isAuth:true
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact> Home</NavLink></li>
                            <li><NavLink to={{pathname:'/new-post'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               
                {/* <Posts/> */}
                {/* <Route path="/" exact  render = {() => <h1>Home</h1>}/>
                <Route path="/" render = {() => <h1>Home 2</h1>}/> */}
                <Switch>
               {this.state.isAuth ? <Route path="/new-post"  component ={asynNewPost}/>:null} 
                <Route path="/posts"  component ={Posts}/> 
                <Route render={() => <h1>404 not found</h1>}/>
                {/* <Route path="/" component={Posts}/> */}
                {/* <Redirect from ="/" to="/posts"></Redirect>  */}
                </Switch>
                    
            </div>
        );
    }
}

export default Blog;