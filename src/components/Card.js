import React from 'react';
import 'tachyons';

const Card= ({name,email,id,username}) => { 

    function cclick(){
        alert(`this is cat No.${id} called ${username}` );
    }

    return(
        <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5' onClick={cclick}>
            <img alt='robots' src={`https://robohash.org/${id}?size=250x250&set=set4`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;