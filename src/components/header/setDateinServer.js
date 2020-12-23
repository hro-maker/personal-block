import React from 'react';

import { db } from '../../server/firebase';


export const SetdateinServer=({toggleauth})=>{
    db.collection("auth").doc("auth").set({
        auth:toggleauth
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    return(
        <div></div>
    )
}