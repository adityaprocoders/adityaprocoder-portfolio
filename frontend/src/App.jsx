
import './App.css'
import Home from './Home';
import NotFound from './Components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// blue [#00B4D8]
// orange text-[#F7941E]

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
         
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


