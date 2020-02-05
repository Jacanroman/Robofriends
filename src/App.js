import React, {Component} from 'react';
import Cardlist from '../Components/cardlist';
//import {robots} from './robots';
import Scroll from '../Components/scroll'
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'

/*
const state = {
   robots: robots,
   searchfield:''
}
*/

class App extends Component{
   constructor(){
      super()
      this.state = {
         robots: [],
         searchfield:''
      }
      
   }

   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
         return response.json();
      })
      .then(users =>{
         this.setState({ robots: users});
      })
      
   }

   onSearchChange= (event) => {
      this.setState({searchfield: event.target.value})
      /*
      const filteredRobots = this.state.robots.filter(robots =>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      console.log(filteredRobots);*/
   }
   
   render(){

      const filteredRobots = this.state.robots.filter(robots =>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      if (this.state.robots.length ===0){
         return <h1>Loading</h1>
      } else {
         return (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
               <ErrorBoundry>
                  <Cardlist robots={filteredRobots}/> 
               </ErrorBoundry>
            </Scroll>
            </div> 
         ); 
      }
   }
}

/*
const App = () =>{
   return (
      <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <Cardlist robots={robots}/> 
      </div> 
   ); 
}
*/

export default App;