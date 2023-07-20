import "./App.css";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SignupPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SingupPage></SingupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <dic className="App">
      <RouterProvider router={router} />
    </dic>
  );
}

export default App;
