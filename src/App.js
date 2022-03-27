import { Button, Spinner } from 'react-bootstrap'
import './App.css'
import CardGroup from './components/CardGroup/CardGroup'
import CardGroup2 from './components/CardGroup2/CardGroup2'

function App({ product }) {
  return (
    <div className="App">
      <CardGroup></CardGroup>
      <CardGroup2></CardGroup2>
      <h1>Using react bootstrap</h1>
      <Button variant='danger'>My Btn</Button>

      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default App
