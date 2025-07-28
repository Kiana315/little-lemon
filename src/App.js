import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import './App.css';

function App() {
    return (
        <Router>
            <header className="top-header">
                <Header />
                <Nav />
            </header>
            <main>
                <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
