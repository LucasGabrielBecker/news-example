import './index.css'
import { NavBar, News } from './components'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('Blogs')
  const handleTab = tab => setActiveTab(tab)
  return (
    <div className="App font-sans">
      <NavBar handleTab={handleTab} activeTab={activeTab} />
      <News activeTab={activeTab} />
    </div>
  )
}

export default App
