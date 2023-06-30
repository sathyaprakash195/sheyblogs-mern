import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/add-blog"
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        />
        <Route
          path="/edit-blog/:id"
          element={
            <Layout>
              <EditBlog />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
