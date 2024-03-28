
import {Routes,Route,Navigate} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
import Organization from './components/Organization'
import Assets from './components/Assets'
import Footer from './components/Footer'
import Trade from './components/Trade'

import './App.css';


function App() {
  return (
    <div className='app'>
        <div className="app-sidebar-con">
          <Sidebar />
        </div>
        <div className='app-header-con'>
          <Header />
        </div>
        <Routes>
          <Route exact path="/" element={<Content/>}/>
          <Route exact path="/org" element={<Organization/>}/>
          <Route exact path="/assets" element={<Assets/>}/>
          <Route path="/trade" element={<Trade/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <div className='app-footer-con'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
