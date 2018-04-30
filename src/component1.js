import React, { Component } from 'react';
 
class Comp1 extends Component {
  info(){
  	// render(<div className="info">info</div>);
  	alert();
  }

  render() {
    return (
      <div className="comp1">component1
      </div>
    );
  }
}

export default Comp1;