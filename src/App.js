import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { ItemsProvider } from './context/ItemsContext';
import Navigation from './components/Navigation';
function App() {
  return (
    <ItemsProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ItemsProvider>
  );
}

export default App;
