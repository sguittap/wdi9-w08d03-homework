import React from 'react';

const Search =(props)=>{
    return(
        <div>
            <h5>search me so hard..</h5>
            <form onSubmit={props.handleSubmit}>
            <input type="text" value={props.value} onChange={props.onChange} placeholder="search"/>
            <button type="Submit">Search</button>
            </form>
        </div>
    )
}
export default Search;
