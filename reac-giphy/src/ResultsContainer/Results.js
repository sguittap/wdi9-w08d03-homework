import React from 'react';

const Results = (props)=>{
    const giphys = props.results.map((result, i) => {   
        console.log(result.source,'<-- img result')
 
    return(
        <img
            alt="giphyImg"
            key={i}
            src={result.images.downsized.url}
            style={{
              width: '200px',
              height: '200px'
            }}
          />
    )})
    return(
        <div>
            <h5>These are your giphys</h5>
            <ul>{giphys}</ul>
        </div>
    )
}

export default Results;