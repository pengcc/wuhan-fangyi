import {
  List,
  fromJS
} from 'immutable'
import forIn from 'lodash/forIn'
import get from 'lodash/get'

import types from '../data-types'

let initStateObject = {}
forIn(types, (typeConfig, type) => {
  initStateObject[type] = {
    list: [],
    fetching: false,
    fetched: false,
    fetchError: null,
    updating: false,
    updated: false,
    updateError: null,
    creating: false,
    created: false,
    createError: null,
    deleting: false,
    deleted: false,
    deleteError: null,
    one: null,
    fetchingOne: false,
    fetchedOne: false,
    fetchErrorOne: null,
    filter: null,
  }
})

const initState = fromJS(initStateObject)

export default function sales(state = initState, action) {
  if (!!action.apiType) {
    switch (action.type) {
      case `FETCH_${action.apiType.toUpperCase()}_LIST_PENDING`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'list'], List([]))
          reducer.setIn([`${action.apiType}`, 'fetching'], true)
        })
      case `FETCH_${action.apiType.toUpperCase()}_LIST_FULFILLED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'list'], List(action.payload))
          // reducer.setIn([`${action.apiType}`, 'length'], parseInt(get(action.payload, 'header.Content-Range')) || parseInt(get(action.payload, 'header.content-range')) || 0)
          reducer.setIn([`${action.apiType}`, 'fetching'], false)
          reducer.setIn([`${action.apiType}`, 'fetched'], true)
        })
      case `FETCH_${action.apiType.toUpperCase()}_LIST_REJECTED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'fetching'], false)
          reducer.setIn([`${action.apiType}`, 'fetchError'], action.error)
        })

      case `APPEND_${action.apiType.toUpperCase()}_LIST_PENDING`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'fetching'], true)
        })
      case `APPEND_${action.apiType.toUpperCase()}_LIST_FULFILLED`:
        return state.withMutations(reducer => {
          const originalList = reducer.getIn([`${action.apiType}`, 'list'])
          reducer.setIn([`${action.apiType}`, 'list'], List(originalList.concat(action.payload)))
          // reducer.setIn([`${action.apiType}`, 'length'], parseInt(get(action.payload, 'header.Content-Range')) || parseInt(get(action.payload, 'header.content-range')) || 0)
          reducer.setIn([`${action.apiType}`, 'fetching'], false)
          reducer.setIn([`${action.apiType}`, 'fetched'], true)
        })
      case `APPEND_${action.apiType.toUpperCase()}_LIST_REJECTED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'fetching'], false)
          reducer.setIn([`${action.apiType}`, 'fetchError'], action.error)
        })

      case `FETCH_${action.apiType.toUpperCase()}_ONE_PENDING`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'one'], null)
          reducer.setIn([`${action.apiType}`, 'fetchingOne'], true)
          reducer.setIn([`${action.apiType}`, 'fetchedOne'], false)
        })
      case `FETCH_${action.apiType.toUpperCase()}_ONE_FULFILLED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'one'], fromJS(action.payload))
          reducer.setIn([`${action.apiType}`, 'fetchingOne'], false)
          reducer.setIn([`${action.apiType}`, 'fetchedOne'], true)
        })

      case `FETCH_${action.apiType.toUpperCase()}_ONE_REJECTED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'fetchingOne'], false)
          reducer.setIn([`${action.apiType}`, 'fetchErrorOne'], action.error)
        })
      case `UPDATE_${action.apiType.toUpperCase()}_PENDING`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'updating'], true)
          reducer.setIn([`${action.apiType}`, 'updated'], false)
          reducer.setIn([`${action.apiType}`, 'updateError'], null)
        })
      case `UPDATE_${action.apiType.toUpperCase()}_FULFILLED`:
        return state.withMutations(reducer => {
          // reducer.setIn([`${action.apiType}`, 'list'], List(action.payload))
          reducer.setIn([`${action.apiType}`, 'updating'], false)
          reducer.setIn([`${action.apiType}`, 'updated'], true)
        })
      case `UPDATE_${action.apiType.toUpperCase()}_REJECTED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'updating'], false)
          reducer.setIn([`${action.apiType}`, 'updateError'], action.error)
        })
      case `CREATE_${action.apiType.toUpperCase()}_PENDING`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'creating'], true)
          reducer.setIn([`${action.apiType}`, 'created'], false)
          reducer.setIn([`${action.apiType}`, 'createError'], null)
        })
      case `CREATE_${action.apiType.toUpperCase()}_FULFILLED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'creating'], false)
          reducer.setIn([`${action.apiType}`, 'created'], true)
        })
      case `CREATE_${action.apiType.toUpperCase()}_REJECTED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'creating'], false)
          reducer.setIn([`${action.apiType}`, 'createError'], action.error)
        })
      case `DELETE_${action.apiType.toUpperCase()}_PENDING`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'deleting'], true)
          reducer.setIn([`${action.apiType}`, 'deleted'], false)
          reducer.setIn([`${action.apiType}`, 'deleteError'], null)
        })
      case `DELETE_${action.apiType.toUpperCase()}_FULFILLED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'list'], List(action.payload))
          reducer.setIn([`${action.apiType}`, 'deleting'], false)
          reducer.setIn([`${action.apiType}`, 'deleted'], true)
        })
      case `DELETE_${action.apiType.toUpperCase()}_REJECTED`:
        return state.withMutations(reducer => {
          reducer.setIn([`${action.apiType}`, 'deleting'], false)
          reducer.setIn([`${action.apiType}`, 'deleteError'], action.error)
        })
      default:
        return state
    }
  } else {
    return state
  }

}
