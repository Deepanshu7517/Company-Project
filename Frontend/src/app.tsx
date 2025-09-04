import './css/app.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dashboard";
import ErrorElement from "./pages/errorElement";
import Footer from "./components/footer";
import ProtectedRoute from "./components/ProtectedRoute";

export const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement goTo="/" />,
    },
    {
      path: "/login",
      element: <SignIn />,
      errorElement: <ErrorElement goTo="/login" />,
    },
  ]);

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="content">
        <RouterProvider router={routes} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
