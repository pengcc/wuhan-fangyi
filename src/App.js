import React, {Component, Fragment} from "react"
// import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Tabs} from 'antd'

const {TabPane} = Tabs

import Demand from './pages/demand'
import Donor from './pages/donor'
import FakeNews from './pages/fake-news'


class App extends Component {
  componentDidCatch(error, errorInfo) {
    console.error(error)
  }

  render() {
    return (
      <Fragment>
        {/*onChange={}*/}
        <Tabs defaultActiveKey="1">
          <TabPane tab="需求方" key="1">
            <Demand/>
          </TabPane>
          <TabPane tab="捐助者" key="2">
            <Donor/>
          </TabPane>
          <TabPane tab="虚假信息" key="3">
            <FakeNews/>
          </TabPane>
        </Tabs>
        {/*<Router>*/}
        {/*  <Switch>*/}
        {/*    <Route path='/' component={Home}/>*/}
        {/*  </Switch>*/}
        {/*</Router>*/}
      </Fragment>
    )
  }
}

export default App
