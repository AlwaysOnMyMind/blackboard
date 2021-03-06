/***********************************************
 * 
 * MIT License
 *
 * Copyright (c) 2016 珠峰课堂,Ramroll
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import {ACTION_DRAW, ACTION_SET_COLOR, ACTION_CLEAR, ACTION_DRAW_SEGMENT} from "redux/actions/draw"

import {ACTION_SAVE, ACTION_COMPILE} from "redux/actions/code"

let socket = null
export function init_socket() {
  window.socket = socket = io("ws://localhost:3006")

}
export const socket_recorder = store => next => action => {
  
  switch (action.type) {

    case ACTION_DRAW  :
      socket.emit("draw", action)
      break

    case ACTION_CLEAR : 
      socket.emit("clear", action)
      break
    case ACTION_DRAW_SEGMENT: 
      socket.emit("draw", action)
      break
    case ACTION_SAVE:
      socket.emit("save", action)

      break

    case ACTION_COMPILE:
      socket.emit("compile", action)
      break
    case "SAVE_WIDGET" :
      const {topic, id} = action
      socket.emit("save-widget", {...action, widgets : store.getState().course.widgets[topic][id]})
      break
    case "ADD_IMAGE" :
      socket.emit("add-image", action)
      break;
    case "SAVE_MARKDOWN" :
      socket.emit("save-markdown", action)
      break
    case "DELETE_WIDGET":
      socket.emit("delete-widget", action)
      break

  }
  
  return next(action)
}