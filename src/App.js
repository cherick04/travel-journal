import Navbar from './components/Navbar'
import Trip from './components/Trip'
import data from './data'

function App() {
  const trips = data.map((item) => <Trip {...item} />)
  return (
    <div className="App">
      <Navbar />
      {trips}
    </div>
  )
}

export default App
