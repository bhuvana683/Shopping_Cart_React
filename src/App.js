import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // Use Switch in v5
import Home from "./components/Home";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import FloatingButton from "./components/FloatingButton";
import DarkModeToggle from "./components/DarkModeToggle";
import { CartState } from "./context/Context";

function App() {
  const { isDarkMode } = CartState(); // Get isDarkMode from context

  return (
    <BrowserRouter>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header />
        <DarkModeToggle />
        <div className="App">
          <Switch> {/* Switch is used in v5 */}
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/wishlist" component={Wishlist} />
          </Switch>
        </div>
        <FloatingButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
