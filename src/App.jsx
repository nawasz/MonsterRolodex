import { Component, useState } from 'react'
import CardList from './components/card-list/card-list.compoment';
import SearchBox from './components/search-box/searchBoxComponent';
import "./App.css"
class App extends Component{
  constructor(){
    super();
    this.state = {
    monsters:[],
    search:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({
        monsters:users
      }) )
  }

  searchFunc = (event) =>{
  const searchedWord= event.target.value.toLocaleLowerCase();
    this.setState({
      search:searchedWord
    })
  }
  
    render(){
      const filteredWord = this.state.monsters.filter((monster) =>{
                
        return (monster.name.toLocaleLowerCase().includes(this.state.search))
      })
      
      return (
        
      <div className = "app-css">
        <div>
       <SearchBox handleFunction={this.searchFunc} name='searchBox' placeholder='search-monsters' />
       </div>
       <div>
       <CardList monster={filteredWord}/>
       </div>
      </div>
    )  
      
    }
}
export default App;