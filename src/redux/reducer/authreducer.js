const defaultState={
    login:false,
    loading:false
}
const AuthReducer=(state=defaultState,action)=>{
    switch (action.type) {

        case 'page_Loadedd':
            const lee = localStorage.getItem('bool');
            let boolll= JSON.parse(lee);
            if(!boolll||boolll===undefined||boolll=== null){
                boolll=false
            }
            return{
                login:boolll,
                loading:false
            }

        case 'User_gretet_or_login':
            const loc= JSON.stringify(true);
            localStorage.setItem('bool',loc);
            
            const get = localStorage.getItem('bool');
                const booll= JSON.parse(get);
                
            return{
                login:booll,
                loading:false
            }
       case 'Faild_log_in':

        const locc= JSON.stringify(false);
        localStorage.setItem('bool',locc);
        
        const gett = localStorage.getItem('bool');
            const bool= JSON.parse(gett);
           return{
            login:bool,
            loading:false
           }
            
           case 'Loadingg':
               return{
                   ...state,
                   loading:true

               }
        default:
            return state;
    }
}
export default AuthReducer;