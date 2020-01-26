import React, {Component, Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/home'
import {Tabs,TabPane} from 'antd'

// const { TabPane } = Tabs;



class App extends Component {
  componentDidCatch(error, errorInfo) {
    console.error(error)
  }

  render() {
    return (
      <Fragment>
        {/*onChange={}*/}
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Tab 1" key="1">
            需求方
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            捐助者
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            虚假信息
          </TabPane>
        </Tabs>
        <Router>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default App
