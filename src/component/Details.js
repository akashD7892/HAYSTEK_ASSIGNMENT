import React from 'react'
import data from './data.json';


export default function Details(props) {

    const a = data;
    console.log(a);

    return (
        <div className='details'>
            <div id="container">
                <div id="left-column">
                    <p>{props.value + 1}</p>
                </div>
                <div id="right-column">
                    <div className='name'>
                        <p className='nme'>NAME :</p>
                        <p>{a[props.value].name}</p>
                    </div>
                    <div className='location'>
                        <p className='nme'>LOCATION :</p>
                        <p>{a[props.value].location}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
