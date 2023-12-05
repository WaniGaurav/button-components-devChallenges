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
            <div className='btn-div'>
                <MainContent type="button" classv="default" text="<Button />"/>
                <MainContent disabled="disabled" classv="default" text="<Button disabled />"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
