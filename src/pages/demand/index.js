import React, {Component} from 'react'
import {connect} from 'react-redux'
import {incrementNum} from '../../actions/counter-actions'
import _ from 'lodash'
import {Card} from 'antd'

class Index extends Component {

  componentDidMount() {
    this.props.dispatch(incrementNum())
  }

  render() {
    const {count, dispatch} = this.props
    const cardCount = [1, 2, 3, 4, 5, 6, 7]
    return <div>
      <button onClick={() => {
        dispatch(incrementNum())
      }}>+1
      </button>
      需求方{count}
      <div style={{background: '#F7F7F7', padding: 20}}>
        {
          _.map(cardCount, (card) => {
            return <Card bordered={false} key={card} style={{marginBottom: 20}}>
              <p>武汉大学中南医院</p>
              <p>发布时间</p>
              <p>所需物资</p>
            </Card>
          })
        }
      </div>
    </div>
  }
}

export default connect((store) => {
  return {
    count: store.count
  }
})(Index)
