import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(url, debug = false) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function perform() {
      try {
        setLoading(true)
        const response = await axios.get(url)
        if (isCurrent) {
          if (debug) { console.log('response', response.data) }
          setData(response.data)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    let isCurrent = true
    perform()
    return () => {
      isCurrent = false
    }
  }, [url, debug])

  return { data, error, loading }
}
