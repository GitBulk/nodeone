import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

export function useAxiosGet(initialUrl, initialData) {
  const [url, setUrl] = useState(initialUrl)
  const [state, dispatch] = useReducer(fetchDataReducer, {
    isLoading: false,
    error: false,
    data: initialData
  })

  useEffect(() => {
    async function perform() {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const result = await axios.get(url)
        if (isCurrent) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (ex) {
        if (isCurrent) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }

    let isCurrent = true
    perform()
    return () => { isCurrent = false }
  }, [url])

  return [state, setUrl]
}

function fetchDataReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, error: false }
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, isLoading: false, error: false }
    case 'FETCH_FAILURE':
      return { ...state, isLoading: true, error: true }
    default:
      throw new Error()
  }
}