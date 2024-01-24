
import { useEffect, useState } from 'react'
import './App.css'
import { testingService } from './services/testing.service'

function App() {
  const [data, setData] = useState({} as unknown)
  const fetchData = async () => {
    const { data } = await testingService()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <h1>Axios Interceptor</h1>
      {JSON.stringify(data)}
    </>
  )
}

export default App
