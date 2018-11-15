import React, {Component} from 'react';
import Search from '../Search/Search'
import Results from '../ResultsContainer/Results'

class SearchContainer extends Component{
    constructor(){
        super()
        this.state={
            query:'',
            results:[],
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange=(e)=> {
        console.log(e.currentTarget.value,'<---e.target')
        this.setState({
            query: e.currentTarget.value
        })
    }

    handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(this.state.query, '<---state of query')
        const query = this.state.query

        try {
            const findGiphy = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=UAYOFxd7uw7qANX7fYVu9QjRFkYS1udJ`);
            const findGiphyJSON = await findGiphy.json();
            console.log(findGiphyJSON.data, '<-- Search Results')
            // return findGiphyJSON.data
            this.setState({results:findGiphyJSON.data})
            
        } catch (err) {
            console.log(err)
            return err
        }  
    }

    // componentDidMount(){
    //     this.handleSubmit().then((data) => {
    //         this.setState({results:data})
    //         console.log(this.state.results,'<--current results')
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    render(){
        return(
            <div>
                 <Search value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                 <Results results={this.state.results}/>
            </div>
        )
    } 
}
export default SearchContainer;
