import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <div className='pa2'>
        <input 
        className='pa3 ba b--near-white bg-washed-red'
        type='search' 
        placeholder='search cats' 
        onChange={searchChange}
        />
        </div>
    );
}

export default Searchbox;
