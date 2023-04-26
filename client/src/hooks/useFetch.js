import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function perform() {
      try {
        setLoading(true)
        const response = await axios.get(url)
        if (isCurrent) {
          setData(response.data)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    let isCurrent = true
    fetchData()
    return () => {
      isCurrent = false
    }
  }, [url])

  return { data, error, loading }
}
