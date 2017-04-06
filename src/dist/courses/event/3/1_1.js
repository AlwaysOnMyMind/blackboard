import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component{
 
  constructor(){
    super()
    this.state = {color : 'red' }

  }
  click = () => {

    this.setState({
      color : 'blue'
    })
 
 
    
  }
  render(){
  	return <div style={{
        color : this.state.color,
        border : '1px solid #eee',
        padding : "3px"
      }} 
      onClick={this.click} >
      test
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)








