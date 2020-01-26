/* global document */

import React from "react"
import ReactDom from 'react-dom'
import {Provider} from "react-redux"

import App from "./app"
import store from "./store"
import 'antd/dist/antd.css'


ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById("app"))
