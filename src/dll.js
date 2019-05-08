import firebase from './firebase'
let db = firebase.firestore();

import React from 'react';

class DLL extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>Hi</div>);
    }
    componentDidMount(){
        let coll=[]
        db.collection('Recommendation').where("AgeStart",'==',2).get().then((snap)=>{
            snap.forEach((doc)=>{
                // console.log(doc.id,doc.data());
                coll.push(doc.data());
            });
        });
        console.log(coll)
    }
}

export {DLL}