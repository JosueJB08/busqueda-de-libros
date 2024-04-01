import './App.css'
import SearchBar from './components/SearchBar'
import BooksData from './data.json'

function App() {

  return (
    <div className='App'>
      <SearchBar placeHolder="Ingrese el título del libro" data={BooksData}/>
    </div>
    
  )
}

export default App
