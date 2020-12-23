const initialState={
    url:"",
    display:false,
    contact__modal:false,
    share_modal:false
}


const YoutubeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'add_new_player':
            return{
                url:action.payload,
                display:true,
                contact__modal:false,
                share_modal:false
            }
            
         case 'remove_player':
             return{
                    url:"",
                    display:false,
                    contact__modal:false,
                    share_modal:false
             }   

       case 'open_contact_modal':
           return{
            url:"",
            display:false,
            contact__modal:true,
            share_modal:false
           }  
           case 'close_contact_modal':
               return{
                url:"",
                display:false,
                contact__modal:false,
                share_modal:false
               }
             case 'open_share_modal':
                    return{
                    url:"",
                      display:false,
                      contact__modal:false,
                       share_modal:true
                    }    
        default:
            return state;
    }
}
export default YoutubeReducer;