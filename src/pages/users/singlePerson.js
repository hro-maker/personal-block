import React from 'react';

const User=({user})=>{
    
    return(
        <li className="user">
           {user.username}
        </li>
    )
}
export default User;