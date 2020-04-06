import React from 'react';
import NewPost from './components/NewPost'
import PostList from './components/PostList'


function App() {
  return (
    <div className="container">
       <h1>Redux React Tutorial</h1>
      <div className='row'>
        <div className='col s12 m6 '>
          <NewPost />
       </div>
       <div className='col s12 m6 '>
           <PostList />
       </div>
      </div>
     
    </div>
  );
}

export default App;
