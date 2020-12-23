import React from 'react';
import Sitebar from './../../components/sitebar/sitebar';
import Headers from './../../components/header/header';
import './users.scss';
import {db} from '../../server/firebase';
import User from './singlePerson';
import { connect } from 'react-redux';
import { Removeuser, Users } from '../../redux/action/useraction';
class  Userlist  extends React.Component{

    
    componentDidMount(){
        this.props.Removeuser();
        db.collection("users")
         .get()
         .then(Snapshot => {
         const fetchtusers=[];
         Snapshot.forEach(doc => {
            Users(fetchtusers)
          fetchtusers.push(doc.data());
          // console.log(fetchtusers)
      });
      this.props.Users(fetchtusers)
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        })
       
    }

  

render(){
    // const ip=Math.floor(Math.random()*400-200);
   const {users}=this.props;
 const userr=  users.map(user=>{
       return(
        <User
            key={user.username}
            user={user}
        />

       )
   });
  
    return(
       
        <div className="hello_world">
            <Sitebar/>
            
            <div className="userlist_body">
                         <Headers/>
                <div className="userlist_content">
                    <div className="user_title">oure users </div>
               <Vie user={userr}/>
                </div>
            </div>
        </div>
    )
}
}
const Vie=({user})=>{
    return(
        <ul className="user_list">
            {user}
       </ul>
    )
}
const mapstatetoprops=(state)=>{
    return{
        users:state.Userreducer.users
    }
}

const mapdispachToProps={
    Users,
    Removeuser
}
export default connect(mapstatetoprops,mapdispachToProps)( Userlist);