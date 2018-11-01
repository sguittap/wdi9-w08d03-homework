import React, {Component} from 'react';
class Search extends Component{
    constructor(){
        super()
        this.state={}
    }
    handleChange=(e)=> {
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        
      }
    render(){
        return(
            <div>
                <h5>search me so hard..</h5>
                <form onSubmit={this.handleSubmit}>
                <input type="text" className="input" placeholder="search"/>
                <button type="Submit">Search</button>
                </form>
            </div>
        )
    } 
}
export default Search;
