import * as React from 'react'
import { render } from 'react-dom'

import './styles/styles.css'

import { TableInputs } from './table-inputs'
import { TableResults } from './table-results'

function App() {
  const [weight, setWeight] = React.useState(0)
  const [reps, setReps] = React.useState(0)

  return (
    <div className="App">
      <TableInputs weight={weight} setWeight={setWeight} reps={reps} setReps={setReps} />

      <TableResults reps={reps} weight={weight} />
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
