import React from 'react';
import './postlist.scss';
import Highlighter from "react-highlight-words";
const PostListItem =({post,RemovPost,forsearch})=>{
  console.log(forsearch)
    const date=new Date();
    const t=date.getHours();
    const m=date.getMinutes();
    const s=date.getSeconds();
    // const y=date.getFullYear();
    // const month=date.getMonth();
    // const d=date.getDay();
    const now=localStorage.getItem('username');
    const parsnow=JSON.parse(now);
    // console.log(post.userr)
    return(
        <li className="post__list-item">
            <div className="post__descr">
           
            <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ={ `${post.descr}`}
                /> 
            </div>
    <div className="post__date">  {t}:{m}:{s}</div>
    <div
    style={parsnow===post.userr?{display:"block"}:{display:"none"}}
    onClick={()=>RemovPost(post.id)}
     className="remove_post">&times;</div>
        </li>
    )
}
export default  PostListItem;
// 21.06.2020