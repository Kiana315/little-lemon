import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useReducer } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import './App.css';

// 初始化时间（初始可用时间）
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// reducer 用于根据日期更新时间（此处暂时固定）
const updateTimes = (state, action) => {
  // 可以根据 action.date 做不同返回，这里先简单处理
  return initializeTimes();
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <Router>
            <header className="top-header">
                <Header />
                <Nav />
            </header>
            <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatchTimes={dispatch}
              />
            }
          />
        </Routes>
      </main>
            <Footer />
        </Router>
    );
}

export default App;

// function App() {
  

//   return (
//     <>
//       <Header />
//       <Nav />

//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/booking"
//             element={
//               <BookingPage
//                 availableTimes={availableTimes}
//                 dispatchTimes={dispatch}
//               />
//             }
//           />
//         </Routes>
//       </main>

//       <Footer />
//     </>
//   );
// }