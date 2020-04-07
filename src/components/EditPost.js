import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createPost, handleChange, SubmitEdit } from '../store/actions/PostActions';

class EditPost extends Component {
     state = {
        title: '',
        body: '',
        author: '',
     } 

     
   
    handelChange = (e) => {
        this.setState({
            [e.target.name ] : e.target.value
        })
       
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.SubmitEdit(this.state)
       console.log(this.state) 
       this.setState({
        title: '',
        body: '',
        author: '',
       }) 
     } 
        
    
  render() {
     
    return (
      <div> 
          <h3>Edit Post</h3>
          <form onSubmit={this.handleSubmit}>
              <div className='input-field '>
                <label htmlFor="title">Title</label>
                <input  name="title" type="text" value={this.state.title} className="validate" onChange={this.handelChange}  required/> 
              </div>
              <div className='input-field '>
                <label htmlFor="author">Author</label>
                <input  name="author" type="text" value={this.state.author} className="validate" onChange={this.handelChange} required/> 
              </div>
              <div className='input-field '>
                <label htmlFor="body">Body</label>
                <textarea name="body" onChange={this.handelChange} value={this.state.body}  className="materialize-textarea" required> </textarea>
              </div>
              <div className='input-field '>
              <button type='submit' className="btn">Submit</button>
              </div>

          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    blog: state.blogs.blog
})


const mapActionsToProps = {
    createPost: createPost,
    HandleChange: handleChange,
    SubmitEdit: SubmitEdit


}
export default connect(mapStateToProps, mapActionsToProps)(EditPost);
