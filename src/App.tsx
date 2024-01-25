
//import { useEffect, useState } from 'react'
import './App.css'
// import { testingService } from './services/testing.service'
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager'
import { SnackbarProvider } from 'notistack'
import ComponentTest from './components/ComponentTest'
//import { ErrorBoundary } from './utilities/ErrorBoundaries'
import ComponentTestAsync from './components/ComponentTestAsync'

function App() {
  /*
    const [name, setName] = useState<string | null>(null)
  
  
    useEffect(() => {
      setTimeout(() => {
        setName("Andres")
      }, 2000)
    }, [])
  */

  // TODO lo comentado pertenece al 1er ejemplo, gestionando un timeout
  // TODO lo ultimo es manejar los fetch por separado envolviendo a cada uno un ErrorBoundary
  return (
    <>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        {/*  <ErrorBoundary
          resetCondition={name}
          fallbackComponent={<>There was a problem with this component!</>}
        >
      */}
        <h1>Error Boundaries</h1>
        <ComponentTestAsync />
        {/*<ComponentTest name={name} /> */}
        <ComponentTest name={'App not crashed regardless Error boundaries is true'} />
        {/*   </ErrorBoundary> */}
      </SnackbarProvider>
    </>
  )
}

export default App
