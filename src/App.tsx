
import { useEffect, useState } from 'react'
import './App.css'
import { testingService } from './services/testing.service'
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager'
import { SnackbarProvider } from 'notistack'

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
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <h1>Axios Interceptor</h1>
        {JSON.stringify(data)}
      </SnackbarProvider>
    </>
  )
}

export default App
