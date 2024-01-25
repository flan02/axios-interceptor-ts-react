/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { ErrorBoundary } from '../utilities/ErrorBoundaries'

const ComponentTestAsync = () => {
  const [result, setResult] = useState()
  const [error, setError] = useState<boolean>(false)
  let url: string;
  url = "https://asdrickandmortyapi.com/api/character/1"
  const fetchRickAndMorty = async () => {
    const response = await
      fetch(url)
        .then((r) => {
          if (r.status !== 200) throw new Error('Error de Conexion!')
          setError(false)
          return r
        })
        .catch((error) => {
          setError(true)
          url = "https://rickandmortyapi.com/api/character/2"
          throw new Error(error)
        })
    const data = await response.json()
    setResult(data)
  }

  useEffect(() => {
    fetchRickAndMorty()
    setTimeout(() => {
      fetchRickAndMorty()
    }, 5000);
  }, [])
  return (
    <>
      <ErrorBoundary
        fallbackComponent={<div style={{ color: 'red' }}>ErrorBoundary Wrapper Customized. App crashed</div>}
        resetCondition={result}
        error={error}
      >
        <div style={{ background: 'black', color: 'white' }}>{JSON.stringify(result)}</div>
      </ErrorBoundary>
    </>
  )
}

export default ComponentTestAsync