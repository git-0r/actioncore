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
import Orders from "./pages/Orders";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";

function App() {
  const user = useSelector((state) => state.user.currentUser)
  const activeTheme = useSelector(state => state.theme.active)
  return (
    <div>
      <Router>
        <ScrollToTop />
        <ThemeProvider theme={{
          bgPrimary: activeTheme === "light" ? "#e4e4e4" : "#191919",
          bgSecondary: activeTheme === "light" ? "white" : "#202020",
          fontColorPrimary: activeTheme === "light" ? "#191919" : "#e4e4e4",
          fontColorSecondary: activeTheme === "light" ? "191919" : "white",
        }}>
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
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
