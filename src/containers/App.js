import React ,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
constructor(){
    super()
    this.state={
        robots:robots,
        searchfield:''
    }  
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots:robots}));
}

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
}
  render(){
      const{robots,searchfield}=this.state;
    const filteredRobots=robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length?
        <h1>loading</h1>:
    (
        <div className='tc'>
        <h1 className="title-text">Feline Friends</h1>
        <h3 className="subtext">The best cats in the world!</h3>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
        <Cardlist robots={filteredRobots} />
        </Scroll>
        </div>
        );
  }
} 
 


export default App;