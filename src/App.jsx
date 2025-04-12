import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

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
  
    render(){
      let filteredWord = this.state.monsters.filter((monster) =>{
                
        return (monster.name.toLocaleLowerCase().includes(this.state.search))
      })
      return (
      <>
      <input type='search' name='searchBox' onChange={(event) =>{
            console.log(event.target.value)
            const searchedWord = event.target.value.toLocaleLowerCase()
           
            this.setState({
              search:searchedWord
            })
      }}/>
      {filteredWord.map((monster,id) =>
      <h1 key={id}>{monster.name}</h1>)}</>
    )  
      
    }
}
export default App;