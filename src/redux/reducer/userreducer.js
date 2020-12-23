const defaultState={
    users:[]
}
const Userreducer=(state=defaultState,action)=>{
        switch (action.type) {
            case 'new_user':
                return{
                    users:[
                        ...state.users.slice(0),
                        ...action.payload.slice(0)
                    ]
                }
                case 'Removeuser':
                    return{
                        users:[]
                    }
            default:
              
               return state;
        }
}
export default Userreducer;