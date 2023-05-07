// import { useEffect, useReducer, useState } from 'react'
// import axios from 'axios'
import { useState } from 'react'
import { useAxiosGet } from 'hooks/useAxios'

export default function Sample2() {
  const [query, setQuery] = useState('Redux')
  const [{ data, isLoading, error }, performFetch] = useAxiosGet('https://hn.algolia.com/api/v1/search?query=redux', { hits: [] })

  return (
    <div className='center-container'>
      <form onSubmit={event => {
        performFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        event.preventDefault()
      }}>
        <div className='ui action input'>
          <input type='text' placeholder='Enter a topic' value={query} onChange={e => setQuery(e.target.value)} />
          <button className="ui button">Search</button>
        </div>
      </form>
      {error && <div>Something went wrong</div>}
      {isLoading ? 'Loading ...' : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url} rel='noreferrer' target='_blank'>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// function useDataApi(initialUrl, initialData) {
//   const [url, setUrl] = useState(initialUrl)
//   const [state, dispatch] = useReducer(fetchDataReducer, {
//     isLoading: false,
//     error: false,
//     data: initialData
//   })

//   useEffect(() => {
//     async function perform() {
//       dispatch({ type: 'FETCH_INIT' })
//       try {
//         const result = await axios.get(url)
//         if (isCurrent) {
//           dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
//         }
//       } catch (ex) {
//         if (isCurrent) {
//           dispatch({ type: 'FETCH_FAILURE' })
//         }
//       }
//     }

//     let isCurrent = true
//     perform()
//     return () => { isCurrent = false }
//   }, [url])

//   return [state, setUrl]
// }

// function fetchDataReducer(state, action) {
//   switch (action.type) {
//     case 'FETCH_INIT':
//       return { ...state, isLoading: true, error: false }
//     case 'FETCH_SUCCESS':
//       return { ...state, data: action.payload, isLoading: false, error: false }
//     case 'FETCH_FAILURE':
//       return { ...state, isLoading: true, error: true }
//     default:
//       throw new Error()
//   }
// }