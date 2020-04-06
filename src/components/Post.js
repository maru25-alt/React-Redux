import React from 'react'


export default function Post(props) {
    const blog = props.blog
    return (
        
        <div className='card'>
            <div className='card-content'>
                <div>
    <h6 className='card-title'>{blog.title}</h6>
    <p> {blog.body}</p>
    </div>
    
                <div>
                  <a className='col s6'>Created On: {blog.date}</a>
                  <a className='col s6'>Author: {blog.author}</a>
                </div>
                </div>
                
                <div className='card-action row'>
                 <button  className='btn col s3' onClick={ () => {props.editPost(blog.id)}} >Edit</button>
                 <button  className='btn col s3' onClick={ () => {props.deletePost(blog.id)}} >Delete</button>
                </div>

           
           
        </div>
    )
}


