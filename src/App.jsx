import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Comments from "./pages/Comments";
import Contact from "./pages/Talk"
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Correção: a rota deve ser "/about", não "/About" */}
        <Route path="/comments" element={<Comments />} /> {/* Correção: o componente é "Comments", não "Comment" */}
        <Route path="/talk" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
