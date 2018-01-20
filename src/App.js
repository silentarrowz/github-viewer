import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:'',
      username:''
    };
  this.handleInput = this.handleInput.bind(this);
  this.handleSearch = this.handleSearch.bind(this); 
  }

  handleInput(e){
    const username = e.target.value;
    this.setState({
      username:username
    });
  }

handleSearch(){
  const user = this.state.username;
  let url = 'https://api.github.com/users/'+user+'/repos';
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    this.setState({
      data:data
    });
  })
}

  render() {
    console.log(this.state);
    var rows=[];
    if(this.state.data){
      this.state.data.map(item=>rows.push(<div>{item.name}</div>))
}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Github Viewer</h1>
        <p className="App-intro">
          
          
          <input type="text"
           name="search"
            placeholder="enter username"
            onChange={this.handleInput}
            />
          <button onClick={this.handleSearch} >Submit</button>
        </p>
      <p>{rows}</p>

      </div>
    );
  }
}

export default App;
