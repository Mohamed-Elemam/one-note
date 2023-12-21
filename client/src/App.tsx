import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import Notes from "./pages/NotesPage/NotesPage";
import Signup from "./pages/SignupPage/SignupPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Layout from "./Layout";
import UnauthenticatedRoute from "./utils/UnauthenticatedRoute";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: (
            <UnauthenticatedRoute>
              <LoginPage />
            </UnauthenticatedRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <UnauthenticatedRoute>
              <Signup />
            </UnauthenticatedRoute>
          ),
        },
        {
          path: "/notes",
          element: (
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

// <>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/signup" element={<Signup />} />
//     <Route element={<ProtectedRoute />}>
//       <Route path="/notes" element={<Notes />} />
//     </Route>
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// </>;
