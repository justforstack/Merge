import React,{Component} from 'react';

class Test extends Component{
constructor(props){
    super();
    this.state={
        count:100,
        clicked:false
    }
    function handleClick(){
    this.setState((state)=>{
      clicked:true;
    });
    if(clicked){
        this.setState(()=>{
            count:count+1;
        })
    }

    }
}
render(){
return(
    <>
    <button onClick={()=>{handleClick}}>Increase Like</button>
    </>
)
}
}