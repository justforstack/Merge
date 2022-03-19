import logo from './logo.svg';
import './App.css';
import React from 'react';
import Causal from './components/causal'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      x:null,
      component:"causal"
    };
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  callApi=(x)=>{
    fetch("http://localhost:3000/loadDefault",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({data:x})
    })
    .then(response =>console.log(response.status))
    .then(console.log("done"));
  }
  render(){
    console.log("rendering again...");
    if(this.state.x==1){
      return(<div><h1>Loading...</h1></div>);
    }
    else{
    return(
      <div>
        this is a react check!!

      <button onClick={()=>{this.setState({x:1})}}>State check</button>
  <br/>
      <button onClick={()=>this.callApi("checkdb")}>Mongo db check</button>
      </div>

    );
  }
}
}

export default App;
