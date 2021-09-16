import React, { Component } from 'react'
import { getApi, updateApi, deleteApi, postApi } from './Api' 

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       errorMsg: "",
       userId:'', 
       title:'',
       body:'',
       addPostFlag:false
    }
  }

  componentDidMount() {
    getApi( { callback: (error, data) => !error && this.setState({ posts: data }) }) 
  }
  
  handleUpdate = (postId) => {
    let {userId, title, body} = this.state
    userId=prompt("Enter User Id")
    title=prompt("Specify a Title")
    body=prompt("Enter post Body")

    updateApi ( { postId:postId , data:{userId:userId, title:title, body:body}, callback: (error, data) => !error && console.log(data)} )
  }
  
  handleDelete = (postId) => {
    deleteApi ( {postId:postId , callback: (error, data) => !error && console.log(data)} )
  }

  onChangeHandler = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  onSubmitHandler = event => {
    const {userId, title, body} = this.state;
    event.preventDefault();
    postApi( {callback: (error, data) =>  !error && console.log(data) , data:{userId:userId, title:title, body:body}} )
  }

  insertPost = () => {
    this.setState( prevState => {
      return {addPostFlag: !prevState.addPostFlag }
    })
  }
  
  render() {
    const {posts, errorMsg, addPostFlag, userId, title, body} = this.state;
    return (
      <>

      {!addPostFlag &&  <div>
        <hr />  List of Posts <hr /> <button onClick={this.insertPost} >Add a Post</button> <br />
        {
          posts.length ? 
          posts.map(post => <div key={post.id}>{post.title} &nbsp;
          <button id={post.id} onClick={(e) => this.handleUpdate(post.id) }>Update</button>
          <button id={post.id} onClick={(e) => this.handleDelete(post.id)}>Delete</button>
          </div>)
          : null 
        }
        {
          errorMsg.length ? 
          <div>{errorMsg}</div> 
          :null
        }
      </div> }

      {addPostFlag &&  <div>
        <hr />  Add a Post <hr /> <br />
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input 
              type="text" 
              name="userId" 
              value={userId} 
              placeholder="userId" 
              onChange={this.onChangeHandler} />   
          </div>
          <div>
            <input 
              type="text" 
              name="title" 
              value={title} 
              placeholder="title" 
              onChange={this.onChangeHandler} />   
          </div>
          <div>
            <input
              type="text" 
              name="body" 
              value={body} 
              placeholder="body" 
              onChange={this.onChangeHandler} />   
          </div>
          <br /><button type="submit">submit</button>
      </form>
      </div> }

    </>  
      
    )
  }
}

export default PostList
