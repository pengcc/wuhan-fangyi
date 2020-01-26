import {Radio} from "antd"
import React from "react"
import './styles.scss'
import UUID from 'uuid/v4'

export default function Filter({name, label, onChange, defaultValue, options}){
  return <div className='filter'>
    <div className='filter-label'>{label}</div>
    <Radio.Group name={name||UUID()} defaultValue={defaultValue} onChange={onChange}>
      {
        _.map(options, ({value, label})=>{
          return <Radio value={value} key={value}>{label}</Radio>
        })
      }
    </Radio.Group>
  </div>
}
