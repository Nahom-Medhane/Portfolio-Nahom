import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class Counter extends Component{
   
   state = {

   	 count: this.props.value,
   }

   increment = ()  => { 
	
	 return this.state.count == 0 ? "zero"  : this.state.count; 


    }	

    handle = () =>{
     this.setState({count: this.state.count + 1})
    }

    
  
	render(){
   
  
		return(
<div>
  <h4>counter  {this.props.id}</h4>
<span className="badge badge-warning m-2 ">{this.increment()}</span>
<button className="btn btn-primary" onClick={this.handle}>Increment</button>  
<button className="btn btn-danger m-2" onClick={() => this.props.onDelet(this.props.id)}>Delet</button>
      
</div>		

)
	}

	
}

export default Counter;
