import {DELETE_POST, NEW_POST, EDIT_POST} from './types';
import { v4 as uuidv4 } from 'uuid';



export const createPost = (postData) => dispatch =>{
          const post = {
            ...postData,
            author: 'Maru',
            date: new Date().toDateString(),
            id: uuidv4()
          }
          dispatch({
            type: NEW_POST,
            payload: post
          })
       
}

export const deletePost = (id) => dispatch =>{
  dispatch({
    type: DELETE_POST,
    payload : id
  })
}


export const editPost = (id) => dispatch => {
  console.log('edit')
  dispatch({
    type: EDIT_POST,
    payload: id,
  })
}