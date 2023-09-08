import React, { useState } from 'react';
import Details from './Details.js';


export default function DetailsItems() {
    const [index, setindex] = useState(0);
    const next = () => {
        if (index === 26)
            setindex(index + 1)
        else
            setindex(index + 3);

        console.log(index);
    }
    return (
        <div className='ui'>
            <div className='header'>
                <p>PEOPLE DATA</p>
                <button disabled={index === 27} onClick={next}>NEXT PERSON</button>
            </div>

            <Details value={index} />
            {(index + 1) < 27 && <Details value={index + 1} />}
            {(index + 2) < 27 && <Details value={index + 2} />}
            <center style={{ color: 'white' }}>CURRENTLY {index === 27 ? 1 : 3} PEOPLE ARE SHOWING</center>
        </div>
    )
}
