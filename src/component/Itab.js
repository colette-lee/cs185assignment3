import React, {Component} from 'react';

function Itab (props){
    const addStyle = () => {
        if(props.out.id == props.activetab){
            return {backgroundColor: 'cadetblue'}
        } else {
            return {backgroundColor: 'grey'}
        }
    };
    console.log(props);

    return (
        <div className='indTab' style = {addStyle()} onClick={props.ctab.bind(this,props.out.id)}> {props.out.title}</div>
    ); 
    
}

export default Itab;

