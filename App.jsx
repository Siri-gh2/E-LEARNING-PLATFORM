import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
