import {DELETE_POST , NEW_POST, EDIT_POST} from '../actions/types';

const intialState = {
    blogs: [
        {
            id: 1,
            title: 'first blog',
            body: 'sample text cdegirh ofeoeriojeoibjor objoih',
            date: new Date().toDateString(),
            author: 'maru'

        }
    ],
    blog: {}
}

export default function (state = intialState, action){
    
    switch(action.type){
        case DELETE_POST :
            return {
                ...state,
                blogs: state.blogs.filter( e =>{
                    return e.id != action.payload
                })
                
            };
            case NEW_POST: 
            return{
                    ...state,
                    blogs: [...state.blogs,action.payload],
                    
            };
            case EDIT_POST : 
            return {
                ...state,
                blog: state.blogs.filter(e => {
                    return e.id === action.payload
                })
                
            };
           
        default: return state;
    }
    
}


const intialState = {
  blogs: [],
  blod: {},
}

export default function (state = intialState, action){

    switch(action.type){
        case '':
            return{
                ...state
            };

            default: return state
    }
}