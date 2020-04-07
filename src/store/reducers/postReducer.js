import {DELETE_POST , NEW_POST, EDIT_POST, HANDELE_CHANGE, SUBMIT_EDIT
} from '../actions/types';

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
    blog: {},
    isEdit: false,
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
                }),
                blogs: state.blogs.filter( e =>{
                    return e.id != action.payload
                }),
                isEdit: true
                
            };

            case HANDELE_CHANGE: 
            return {
                ...state,
                blog: [{...state.blog, [action.payload.target.name ] : action.payload.target.value}]
            }
            case SUBMIT_EDIT:
                return{
                    ...state,
                    blog: {},
                    blogs: [...state.blogs, action.payload],
                    isEdit: false,
                }
           
        default: return state;
    }
    
}



