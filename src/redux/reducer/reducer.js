import {db} from '../../server/firebase';
const initialState={
    posts:[],
    id:"",
    loading:false
}
const RootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "Post__Loaded":
         
            return{
               ...state,
                posts:action.payload,
                id:action.payload.id,
                loading:false
            }
           
    case 'add_new_post':
        const NewPost= action.payload;
        return{
            ...state,
            posts:[
                ...state.posts.slice(0,state.posts.length),
                NewPost
            ],
            id:action.payload.id,
            loading:false
        }

        case 'Remove_Post':
            const id= action.adres;
            const itemInd = state.posts.findIndex(item => item.id === id);
            db.collection("posts").doc(`${id}`)
            .delete()
            .then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            })
            return{
                    ...state,
                    posts:[
                        ...state.posts.slice(0, itemInd),
                        ...state.posts.slice(itemInd+1)
                    ],
                    loading:false
            }
            case 'LOading':
                return{
                    ...state,
                    loading:true
                }

            case 'fetcht_posts':
                const Fetchtarr =action.payload;
                return{
                    ...state,
                    posts:[
                        ...state.posts.slice(0),
                        ...Fetchtarr.slice(0)
                    ],
                    loading:false
                }    
        default:
            return state;
    }
}
export default RootReducer;