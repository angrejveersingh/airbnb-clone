
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Screens/Header/Header';
import Home from './Screens/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './Screens/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
        <Route path="/search" element={<SearchPage />} />

          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
      {/* Header */}

      {/* Banner */}

      {/* Cards */}

      {/* Footer */}
    </div>
  );
}

export default App;
