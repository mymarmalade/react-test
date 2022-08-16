import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;