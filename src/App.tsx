import React from 'react'
import styled from 'astroturf/react'

const HelloWorld = styled('p')`
  font-size: 32px;
  text-align: center;
  width: 100%;
`

const App: React.VFC = () => {
  return (
    <div>
      <HelloWorld>Hello World</HelloWorld>
    </div>
  )
}

export default App
