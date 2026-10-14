import './App.css';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProducrScreen from './Screen/ProductScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen/>}/>
              <Route path="/product/:id" element={<ProducrScreen/>}/>
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
