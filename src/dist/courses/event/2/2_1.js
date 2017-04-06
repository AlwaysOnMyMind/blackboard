import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component{
 

  click = (e) => {
    console.log(e)
    
    setTimeout( () => {
      console.log(e)
    })
 
    
  }
  render(){
  	return <button onClick={this.click} >
      test
    </button>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)









