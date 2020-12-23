
const Users=(userarr)=>{
  return{
    type:'new_user',
    payload:userarr
  }
}
const Removeuser=()=>{
  return{
    type:'Removeuser'
  }
}
export {Users,Removeuser}

