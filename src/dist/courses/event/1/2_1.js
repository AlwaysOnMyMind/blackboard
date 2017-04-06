import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component{
 
  cp = (e) => {
    console.log('captured')
  }
  click = (e) => {
    console.log('click')
  }
  _c =() => {
    console.log("click parent")
  }
  render(){
  	return <div onClickCapture={this.cp} onClick={this._c}>
      <button onClick={this.click} >
        test
      </button>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)








