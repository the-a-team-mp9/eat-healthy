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
        db.collection('BMI Trend').get().then((snap)=>{
            snap.forEach((doc)=>{
                console.log(doc.id,doc.data());
            });
        });
    }
}

export {DLL}