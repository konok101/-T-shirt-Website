
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Home/Home';
import OrderReview from './OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>


      </Routes>

      

    </div>
  );
}

export default App;
