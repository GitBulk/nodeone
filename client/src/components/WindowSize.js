import { useEffect, useState } from "react"

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  function getWindowSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    function handleResizeWindow() {
      setWindowSize(getWindowSize)
    }
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  return (
    <p>Width: {windowSize.width}, Height: {windowSize.height}</p>
  )
}