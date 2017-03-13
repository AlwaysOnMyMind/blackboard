$(document.body).append(`
<div>
  <input id='ipt' value=0 type='text' />
  <button id='add'>+</button>
  <button id='sub'>-</button>
</div>
`)

import {createStore} from 'redux'
const initialState = {number : 0}

const calc = (state = initialState, action) => {
  switch(action.type){
    case "ADD" : 
      return {number : state.number + 1}
    case "SUB" :
      return {number : state.number - 1}
  }
  return state  
}

const store = createStore(calc)
$("#add").on('click', function(){
  store.dispatch({type : "ADD"})
})

$("#sub").on("click", function(){
  store.dispatch({type : "SUB"})
})

store.subscribe( () => {
  const state = store.getState()
  $("#ipt").val( store.getState().number )
})












