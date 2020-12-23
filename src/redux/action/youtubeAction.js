const AddyoutubePlayer =(url)=>{
    return{
        type:'add_new_player',
        payload:url
    }
}
const RemoveyoutubePlayer =()=>{
    return{
        type:'remove_player'
    }
}
const OpenContactModal=()=>{
    return{
        type:'open_contact_modal'
    }
}
const CloseContactModal=()=>{
    return{
        type:'close_contact_modal'
    }
}
const OpenShareModal=()=>{
    return{
        type:'open_share_modal'
    }
}
export {
    AddyoutubePlayer,
    RemoveyoutubePlayer,
    OpenContactModal,
    CloseContactModal,
    OpenShareModal
}