const defaultState={
    coments:[],
    likecounter:null
}
const ComentReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case 'Add_new_coment':
            return{
                ...state,
                coments:[
                    ...state.coments.slice(0),
                    action.payload
                ]
            }
            case 'fetcht_new_coment':
                const newarr=action.payload;
                return{
                    ...state,
                    coments:[
                        ...state.coments.slice(0),
                        ...newarr.slice(0)
                    ]
                }
                case 'RemoveAllPosts':
                    return{
                        ...state,
                        coments:[]
                        }
                case 'Get_Like_counter':
                   const liketItemDescr=action.payload;
                   const likek=  localStorage.getItem(`${liketItemDescr}`);
                   const itemmm=JSON.parse(likek);
                   console.log(itemmm);
                    return{
                        ...state,
                        likecounter:itemmm
                    } 
        default:
            return state;
    }
}
export default ComentReducer;