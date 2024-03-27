
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className='app'>
        <Sidebar/>
        <Content/>
        <Footer />
    </div>
  );
}

export default App;
