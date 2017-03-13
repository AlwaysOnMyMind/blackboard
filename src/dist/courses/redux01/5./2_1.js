import {createStore} from 'redux'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
const initialState = {number : 0}

const calc = (state = initialState, action) => {
  switch( action.type ){
    case "ADD":
      return {number : state.number + 1 }
      
    case "SUB":
      return {number : state.number - 1 }
  }
 
  return state 
}

const store = createStore(calc)

class Counter extends Component{
 
  constructor(){
    super()
    this.state = {number : 0}
  }
  _changeHandler = () => {
    this.setState( { number : store.getState().number } )
  }
  componentDidMount(){
    store.subscribe( this._changeHandler )
  }
  _add(){
    store.dispatch({type : "ADD"})
  }

  _sub(){
    store.dispatch({type : "SUB"})
  }
  render(){
    
    return <div>
      <input type='text' value={this.state.number} />
      <button onClick={this._add}>+</button>
      <button onClick={this._sub}>-</button>
	</div>
  }
}

ReactDOM.render(<Counter />, document.getElementById("app") )



















