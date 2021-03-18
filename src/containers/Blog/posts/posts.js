import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';
import Post  from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './posts.css';

class Posts extends Component{

    
    state = {
        posts:[],
      
    }
    componentDidMount(){
        axiosInstance.get('/posts').then(res => {
          const posts = res.data.slice(0,4);
          let updatePosts = posts.map(x =>({...x,author:'ugi'}));
         this.setState({posts:updatePosts});
        }).catch(e => {
//this.setState({error:true})
        console.log(e)
       })
    }


    selectPostHandler(id){
//        this.props.history.push(`/posts/${id}`);
        this.props.history.push({pathname:`${this.props.match.url}/${id}`});
    }

    render(){

        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>
        if(!this.state.error) {
         posts = this.state.posts.map(x => {
            return (
        // <Link to={'/'+x.id} key={x.id}>
         <Post
         title={x.title}
         key={x.id}
         author={x.author}
         clicked={() => this.selectPostHandler(x.id)}/>
        // </Link> 
            )

         });
 
        }

        return(
             <div>
             <section className="Posts">
             {posts}
             </section>
             <Route path={this.props.match.url + '/:id'} exact component={FullPost}></Route>
             </div>
        )
    }
}

export default  Posts;