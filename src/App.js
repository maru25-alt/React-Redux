import React from 'react';
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import PostList from './components/PostList'
import {connect} from 'react-redux'


function App(props) {
  console.log(props)
  let isEdit = props.isEdit;
  const form = isEdit ?<EditPost />  : <NewPost />
  return (
    <div className="container">
       <h1>Redux React Tutorial</h1>
      <div className='row'>
        <div className='col s12 m6 '>
         {form}
       </div>
       <div className='col s12 m6 '>
           <PostList />
       </div>
      </div>
     
    </div>
  );
}


const MapStateToProps = (state) => ({

  isEdit : state.blogs.isEdit,

})

export default connect(MapStateToProps)(App);
