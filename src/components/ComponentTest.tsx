import { useState } from "react"

const ComponentTest = ({ name }: { name: string }) => {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <h5>{name.toUpperCase()}</h5>
      <h5>{count}</h5>
      <button style={{ border: '1px solid blue', background: 'lightblue' }} type="button" onClick={() => setCount(count + 1)}>add</button >
    </>
  )
}

export default ComponentTest