
// import fireaxios from '../../server/fireaxios';
const AddNewComent = (newcoment)=>{
        return{
            type:'Add_new_coment',
            payload:newcoment
        }
}

const FetchtComents = (newarr)=>{
   
    return{
        type:'fetcht_new_coment',
        payload:newarr
    }
}
const RemoveAllPosts=()=>{
    return{
        type:'RemoveAllPosts'
    }
}
const getLikecounter=(descr)=>{
    return{
        type:'Get_Like_counter',
        payload:descr
    }
}
// const LOadad = ()=>{
//     const fetchtPosti=[];
//     fireaxios.get('/usercoments.json').then(response=>{

//         for(let key in response.data){
//             fetchtPosti.unshift({
//                 ...response.data[key],
//                 id:key
//             })
//         }
        
//         console.log(response.data)
//     });
//     return{
//         type:'LOadingg',
//         payload:fetchtPosti
//     }
// }
export {AddNewComent,FetchtComents,RemoveAllPosts,getLikecounter}