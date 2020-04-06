import React, { Component } from 'react';
import {connect} from 'react-redux'
import Blog from './Post'
import {deletePost, editPost} from '../store/actions/PostActions'

class componentName extends Component {
  render() {
      
    const  {blogs, deletePost,editPost} = this.props
    return (
      <div> 
        <h3>Blog List</h3>
        <div>
      {blogs && blogs.length ?
       blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} deletePost={deletePost} editPost={editPost} ></Blog>
       
      )) : 'No Blogs yet!'}
      </div>

     </div>
    );
  }
}

const mapStateToProps = state => ({
   blogs: state.blogs.blogs,

})

const mapActionsToProp ={
  deletePost : deletePost,
  editPost : editPost

}

export default connect(mapStateToProps, mapActionsToProp)(componentName);
