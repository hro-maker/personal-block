import React  from 'react';
import Comment from './comment';
import { connect } from 'react-redux';
import './coment.scss';
// import { db } from '../../server/firebase';
import { FetchtComents, getLikecounter, RemoveAllPosts} from '../../redux/action/comentaction';
import { db } from '../../server/firebase';
import Loader from './../loader/loader';
class Comentlist extends React.Component{
    componentDidMount(){
       this.props.RemoveAllPosts();
        const fetchtPosti=[];
            db.collection("usercoment")
            .get()
            .then(Snapshot => {
                Snapshot.forEach(doc => {
                    fetchtPosti.unshift(doc.data());
                    // console.log(doc.id, " => ", doc.data());
                });
                this.props.FetchtComents(fetchtPosti)
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });    
    }
   render(){
    const {coments}=this.props;
//    const likedd=(id)=>{
       
            // const stemail=JSON.stringify(coment.liked+1)
            // localStorage.setItem( `${coment.descr}`,stemail)
     
            
            
//    }
    // return{
    //     descr:coment.descr,
    //     username:coment.username,
    //     liked:coment.liked+1
    // }

    
//    likeeee.map(like=>{
//        if(like){
//             db.collection("usercoment").doc(`${descr.coment}`).set(like)
//             .then(function() {
//                 console.log("Document successfully written!");
//             })
//             .catch(function(error) {
//                 console.error("Error writing document: ", error);
//             });
//        }
//    })
   
    if(coments.length===0){
        return (
            <div className="containerrrr">
                       <Loader/>
            </div>
        )
    };
    console.log(coments)
     const item = coments.map(coment=>{
      const stemail=JSON.stringify(coment.liked+1)
      localStorage.setItem(`${coment.descr}`,stemail)
    //   this.props.getLikecounter(coment.descr)
        return(
            <Comment
            key={coment.id}
            username={coment.username}
            coment={coment.descr}
            // onlike={likedd}
            item={coment.liked}
            id={coment.id}
            />
        )
    })
    return(
        <View item={item}/>
    )
   }
}
const View=({item})=>{
    return(
        <ul className="container" >
                {item}
        </ul>
    )
}
const mapstateToProps=(state)=>{
    return{
        coments:state.ComentReducer.coments,
        likecounter:state.ComentReducer.likecounter
    }
}

const mapdispachToProps={
    FetchtComents,
    RemoveAllPosts,
    getLikecounter
}
export default connect(mapstateToProps,mapdispachToProps)( Comentlist);