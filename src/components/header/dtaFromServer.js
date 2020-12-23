// import React from 'react';
// import { db } from '../../server/firebase';

// class DateForAuth extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={
//             login:false
//         }
//     }
//     componentDidMount(){
//        db.collection("auth")
//         .get()
//         .then(Snapshot => {
//             const fetchtPosti=[];
//             Snapshot.forEach(doc => {
//                 // doc.data() is never undefined for query doc snapshots
//                 fetchtPosti.unshift(doc.data());
//                 console.log(doc.id, " => ", doc.data());
//                 fetchtPosti.map(post=>{
//                     this.setState({login:post.auth})
//                 })
//             });
           
//         })
//         .catch(error => {
//             console.log("Error getting documents: ", error);
//         });
//     }
    
   
// }
// export default DateForAuth;