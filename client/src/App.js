import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home"
import Login from "./pages/Login";
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import PaymentSuccess from "./pages/PaymentSuccess"
import {
  BrowserRouter as Router,
  Routes, //Routes instead Switch in react-router-dom@6
  Route,
  Navigate
} from "react-router-dom"
import { useSelector } from "react-redux";
import SearchResults from "./components/SearchResults";
import PaymentFail from "./pages/PaymentFail";

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
          <Route path="/searchProducts/:searchText" element={<SearchResults />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
          <Route path="/paymentFail" element={<PaymentFail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
