import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchList} from '../../actions/data-actions'
import _ from 'lodash'
import {Card, Input} from 'antd'
import Filter from '../../components/filter'
import {allToJS} from "../../utils"


const {Search} = Input

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searching: false
    }
  }

  componentDidMount() {
    // this.props.dispatch(fetchList({apiType: 'demands'}))
  }

  onSearch() {
    this.setState({searching: true})
    setTimeout(() => {
      this.setState({searching: false})
    }, 2000)
  }

  onStatusChange(status) {
    console.log(status)
  }

  onTypeChange(type) {
    console.log(type)
  }

  render() {
    const {list} = allToJS(this.props)
    const {searching} = this.state
    return <div className='demand'>
      <div style={{padding: '25px 22px 16px'}}>
        <Search
          placeholder="搜索"
          onSearch={this.onSearch.bind(this)}
          style={{width: '100%'}}
          loading={searching}
        />
        <div>
          <div style={{margin: '19px 0 15px'}}>
            <Filter
              name='status'
              label='解决状态'
              onChange={this.onStatusChange.bind(this)}
              defaultValue={1}
              options={[
                {value: 1, label: '全部'},
                {value: 2, label: '待解决'},
                {value: 3, label: '已解决'},
              ]}
            />
          </div>
          <Filter
            name='type'
            label='物资类型'
            onChange={this.onTypeChange.bind(this)}
            defaultValue={1}
            options={[
              {value: 1, label: '全部'},
              {value: 2, label: '医疗'},
              {value: 3, label: '食物'},
              {value: 4, label: '宾馆'},
              {value: 5, label: '其他'},
            ]}
          />
        </div>
      </div>
      <div style={{background: '#F7F7F7', padding: 20}}>
        {
          _.map(list, (one) => {
            return <Card bordered={false} key={_.get(one, 'id')} style={{marginBottom: 20}}>
              <p>{_.get(one, 'title')}</p>
              <p>发布时间：{_.get(one, 'publish_date')}</p>
              <div>{_.get(one, 'full_content')}</div>
            </Card>
          })
        }
      </div>
    </div>
  }
}

export default connect((store) => {
  return {
    list: store.reducer.getIn(['demands', 'list']),
    fetching: store.reducer.getIn(['demands', 'fetching']),
    fetched: store.reducer.getIn(['demands', 'fetched']),
  }
})(Index)
