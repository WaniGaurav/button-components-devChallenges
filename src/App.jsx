import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
      <div className="container">
        <h1>Button components</h1>
        <div className="btn-container">
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            <MainContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
