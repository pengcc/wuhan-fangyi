import isArray from 'lodash/isArray'
import includes from 'lodash/includes'
import join from 'lodash/join'
import last from 'lodash/last'
import request from 'axios'
import types from '../data-types'
import {params} from '../utils'
import testData from './test-data'
import _ from 'lodash'

const DATA_API = 'http://3.0.108.253:8080/helpwuhan/getAllDemandList'
const testMode = true

export function fetchList({apiType, fetchType = 'FETCH', quiet, ...rest}) {
  let apiUri = apiType
  if (isArray(apiType)) {
    apiUri = join(apiType, '/')
    apiType = last(apiType)
  }
  if (!types.hasOwnProperty(apiType) || !includes(types[apiType].actions, 'list')) {
    return console.warn('invalid type fetchList', apiType)
  }

  return dispatch => {
    if (!quiet) {
      dispatch({type: `${fetchType}_${apiType.toUpperCase()}_LIST_PENDING`, apiType: apiType})
    }
    let promise = () => {
      return request.get(`${DATA_API}/${apiUri}${params(rest)}`)
    }
    if (testMode) {
      promise = () => {
        return new Promise((resolve, reject) => {
          resolve(testData[apiType])
        })
      }
    }
    promise()
      .then(res => {
        let data = null
        try{
          data = JSON.parse(_.get(res, 'message'))
        } catch(error){
          console.error(error)
        }
        dispatch({
          type: `${fetchType}_${apiType.toUpperCase()}_LIST_FULFILLED`,
          apiType,
          payload: data,
        })
        return data
      })
      .catch(error => {
        dispatch({
          type: `${fetchType}_${apiType.toUpperCase()}_LIST_REJECTED`,
          apiType,
          error: error
        })
        return Promise.reject(error)
      })

  }
}

export function fetchOne({apiType, quiet, uuid, ...rest}) {
  let apiUri = apiType
  if (isArray(apiType)) {
    apiUri = join(apiType, '/')
    apiType = last(apiType)
  }
  if (!types.hasOwnProperty(apiType) || !includes(types[apiType].actions, 'retrieve')) {
    return console.warn('invalid type fetchOne', apiType)
  }

  return dispatch => {
    if (!quiet) {
      dispatch({type: `FETCH_${apiType.toUpperCase()}_ONE_PENDING`, apiType: apiType})
    }
    return request.get(`${DATA_API}/${apiUri}/${uuid}`)
      .then(res => {
        dispatch({
          type: `FETCH_${apiType.toUpperCase()}_ONE_FULFILLED`,
          apiType,
          payload: res.data,
        })
        return res.data
      })
      .catch(error => {
        dispatch({
          type: `FETCH_${apiType.toUpperCase()}_ONE_REJECTED`,
          apiType: apiType,
          error: error
        })
        return Promise.reject(error)
      })
  }
}

// export function create({apiType, payload}){
//   let apiUri = apiType
//   if (isArray(apiType)) {
//     apiUri = join(apiType, '/')
//     apiType = last(apiType)
//   }
//   if (!types.hasOwnProperty(apiType) || !includes(types[apiType].actions, 'create')) {
//     return console.warn('invalid type create', apiType)
//   }
//
//   return dispatch => {
//     dispatch({type: `CREATE_${apiType.toUpperCase()}_PENDING`, apiType: apiType})
//
//     return request.post({url: `${DATA_API}/${apiUri}`, data: payload})
//       .then(res => {
//         dispatch({
//           type: `CREATE_${apiType.toUpperCase()}_FULFILLED`,
//           apiType,
//           payload: res.data,
//         })
//         return res.data
//       })
//       .catch(error => {
//         dispatch({
//           type: `CREATE_${apiType.toUpperCase()}_REJECTED`,
//           apiType: apiType,
//           error: error
//         })
//         return Promise.reject(error)
//       })
//   }
// }
//
// export function update({apiType, uuid, payload}){
//   let apiUri = apiType
//   if (isArray(apiType)) {
//     apiUri = join(apiType, '/')
//     apiType = last(apiType)
//   }
//   if (!types.hasOwnProperty(apiType) || !includes(types[apiType].actions, 'update')) {
//     return console.warn('invalid type update', apiType)
//   }
//
//   return dispatch => {
//     dispatch({type: `UPDATE_${apiType.toUpperCase()}_PENDING`, apiType: apiType})
//
//     return request.put({url:`${DATA_API}/${apiUri}/${uuid}`, data: payload})
//       .then(res => {
//         dispatch({
//           type: `UPDATE_${apiType.toUpperCase()}_FULFILLED`,
//           apiType,
//           payload: res.data,
//         })
//         return res.data
//       })
//       .catch(error => {
//         dispatch({
//           type: `UPDATE_${apiType.toUpperCase()}_REJECTED`,
//           apiType: apiType,
//           error: error
//         })
//         return Promise.reject(error)
//       })
//   }
// }
//
// export function remove({apiType, uuid}){
//   let apiUri = apiType
//   if (isArray(apiType)) {
//     apiUri = join(apiType, '/')
//     apiType = last(apiType)
//   }
//   if (!types.hasOwnProperty(apiType) || !includes(types[apiType].actions, 'remove')) {
//     return console.warn('invalid type delete', apiType)
//   }
//
//   return dispatch => {
//     dispatch({type: `DELETE_${apiType.toUpperCase()}_PENDING`, apiType: apiType})
//
//     return request.delete({url: `${DATA_API}/${apiUri}/${uuid}`})
//       .then(res => {
//         dispatch({
//           type: `DELETE_${apiType.toUpperCase()}_FULFILLED`,
//           apiType,
//         })
//         return res
//       })
//       .catch(error => {
//         dispatch({
//           type: `DELETE_${apiType.toUpperCase()}_REJECTED`,
//           apiType: apiType,
//           error: error
//         })
//         return Promise.reject(error)
//       })
//   }
// }
