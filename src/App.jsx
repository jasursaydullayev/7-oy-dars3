import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from './pages/Cart'
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'chekout',
          element: <Cart />
        }
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
