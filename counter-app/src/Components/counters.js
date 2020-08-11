
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';


class Counters extends Component {
	state = {
		Counterss:[ 

		   {id: 1, value:1},
		    {id: 2, value:2},
	     {id: 3, value:3},
	      {id: 4, value:4},
	       {id: 5, value:5},
     ],
	    
	}

   onDelet = counterID => {
   	  const Counterss = this.state.Counterss.filter(c => c.id !== counterID);
   	  this.setState({Counterss: Counterss})
   }
   reload = () => {
      return window.location.reload(true)
    }
	render(){
           
		return( 
		   <React.Fragment>
{this.state.Counterss.map(counter => (<Counter key={counter.id} onDelet={this.onDelet} value={counter.value} id={counter.id}/>))};
<button className="btn btn-primary m-10" style={{margin:'30px'}} onClick={this.reload}>Reload All</button>
          </React.Fragment>
			
		)
	}
}

export default Counters;