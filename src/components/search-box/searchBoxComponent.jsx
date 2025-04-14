import { Component } from "react";
import './search-box.styles.css'

class searchBox extends Component{
    constructor(){
        super();
    }
    render(){
       
       
        return( <input type='search' className="search-box" name={this.props.searchBox}  placeholder={this.props.placeholder}  onChange={this.props.handleFunction}/>
    
        )
}
}

export default searchBox;