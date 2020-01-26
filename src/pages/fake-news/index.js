import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {incrementNum} from '../../actions/actions'

class Index extends Component{

  componentDidMount() {
    // this.props.dispatch(incrementNum())
  }

  render(){
    const {count} = this.props
    return <div>需求方</div>
  }
}

export default connect((store)=>{
  return {
    count: store.count
  }
})(Index)
