import React from 'react';
import PostListItem from './postlistItem';
import {PageLoaded,RemovPost,Loading,FetchtPosts}from '../../redux/action/action';
import './postlist.scss';
import { connect } from 'react-redux';
// import {PostNewtodo}from '../../redux/action/firebaseAction';
import Loader from './../loader/loader';
import {db} from '../../server/firebase';
import { FetchtComents } from '../../redux/action/comentaction';
// import PostAddForm from './../postAddForm/PostAddForm';
// import postsFromserver from '../../server/postsFromserver';
class  PostList  extends React.Component {
    componentDidMount(){
        this.props.PageLoaded(this.props.state);
        // this.props.PostNewtodo(this.props.state)
        this.props.Loading();
        db.collection("posts")
                .get()
                .then(Snapshot => {
                    const fetchtPosti=[];
                    Snapshot.forEach(doc => {
                        // doc.data() is never undefined for query doc snapshots
                        fetchtPosti.unshift(doc.data());
                        console.log(doc.id, " => ", doc.data());
                    });
                    this.props.FetchtPosts(fetchtPosti);
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });          
    }
render(){
    const {posts,RemovPost,loading,forsearch}=this.props;
    if(posts.length===0){
        return (<div className="empty__posts">you don't have any posts :(</div>)
    }
    const items = posts.map(post =>{         
            return(
                <PostListItem
                forsearch={forsearch}
                key={post.id}
                RemovPost={RemovPost}
                post={post}
                
                />
            )
    })
    if(loading){
        return(
            <Loader/>
        )
    }
    return(
        <Viwe items={items}/>
    )
}
}
const Viwe=({items})=>{
    return(
        <ul className="post__list">
        
            {items}
        </ul>
    )
}
const mapstateToProps=(state)=>{
        return{
            posts:state.RootReducer.posts,
            loading:state.RootReducer.loading
        }
}
const mapdispachToProps={
    PageLoaded,
    RemovPost,
    Loading,
    FetchtPosts,
    FetchtComents
}
export default connect(mapstateToProps,mapdispachToProps)( PostList);