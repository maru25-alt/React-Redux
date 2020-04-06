import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createPost } from '../store/actions/PostActions';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
    }


    handelChange = (e) => {
        this.setState({
            [e.target.name ] : e.target.value
        })
       
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.createPost(this.state)
        this.setState({
            title: '',
            body: ''
        })

        
    }
  render() {
      
      
    return (
      <div> 
          <h3>Create New Post</h3>
          <form onSubmit={this.handleSubmit}>
              <div className='input-field '>
                <label htmlFor="title">Title</label>
                <input  name="title" type="text" value={this.state.title} className="validate" onChange={this.handelChange} required/> 
              </div>
              <div className='input-field '>
                <label htmlFor="body">Body</label>
                <textarea name="body" onChange={this.handelChange} value={this.state.body} className=" materialize-textarea" required> </textarea>
              </div>
              <div className='input-field '>
              <button type='submit' className="btn">Create</button>
              </div>

          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    blog: state.blogs.blog
})

export default connect(mapStateToProps, {createPost})(NewPost);
