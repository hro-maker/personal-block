const PageLoaded =(NewPost)=>{
  
   return{
       type:"Post__Loaded",
       payload:NewPost
   }
}

const Addnewpost=(NewPost)=>{
    return{
        type:'add_new_post',
        payload:NewPost
    }
}

const RemovPost=(id)=>{
    return{
        type:'Remove_Post',
        adres:id
    }
}
const Loading=()=>{
    return{
        type:'LOading'
    }
}
const FetchtPosts=(arr)=>{
    return{
        type:'fetcht_posts',
        payload:arr
    }
}
export {
    Addnewpost,
    PageLoaded,
    RemovPost,
    Loading,
    FetchtPosts
    
}