import React, {Component} from 'react';
class Search extends Component{
    constructor(){
        super()
        this.state={
            query:'',

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput=(e)=> {
        console.log(e.currentTarget.value,'<---e.target')
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.query, '<---state of query')
        
      }
    render(){
        return(
            <div>
                <h5>search me so hard..</h5>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleInput} name='query' placeholder="search"/>
                <button type="Submit">Search</button>
                </form>
            </div>
        )
    } 
}
export default Search;
