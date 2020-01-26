// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/action-types";
import axios from 'axios'

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}

export function resetCounter(payload) {
  return {
    type: RESET,
    payload: payload
  };
}

export function fetchDemandList(){
  const payload = {"status":"success","message":"[{\"id\":\"3\",\"item_type\":\"医疗\",\"title\":\"武汉大学中南医院\",\"full_content\":\"所需物资：xxxxxxx\",\"publish_date\":\"2020.01.25 8:00\",\"address\":\"湖北省武汉市武昌区东湖路169号武汉大学中南医院\",\"contact_person_name\":\"钟老师\",\"contact\":\"1502132921\",\"topic_status\":\"待解决\",\"urgency_rating\":\"5\",\"verify_status\":\"已核实\",\"publish_date_epoch_time\":\"1580041021\"},{\"id\":\"4\",\"item_type\":\"医疗\",\"title\":\"武汉大学中南医院2\",\"full_content\":\"所需物资：xxxxxxx\",\"publish_date\":\"2020.01.25 8:00\",\"address\":\"湖北省武汉市武昌区东湖路169号武汉大学中南医院\",\"contact_person_name\":\"钟老师\",\"contact\":\"1502132921\",\"topic_status\":\"待解决\",\"urgency_rating\":\"5\",\"verify_status\":\"已核实\",\"publish_date_epoch_time\":\"1580041021\"}]"}
  return {
    type: 'DEMAND_LIST',
    // payload: axios.get('http://3.0.108.253:8080/helpwuhan/getAllDemandList')
    //   .then((res)=>{
    //     console.log(res)
    //   })
    payload: Promise.resolve(payload)
  }
}
