import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Post from "./pages/Post";
import Authors from "./pages/Authors";
import Join from "./pages/Join";
import Posts from "./pages/Posts";
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import customFetch from "./axios";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [posts, setPosts] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [
        { index: true, element: <Posts /> },
        { path: "/:id", element: <Post /> },
        { path: "/authors", element: <Authors /> },
        { path: "/join", element: <Join /> },
      ],
    },
  ]);

  const fetchPosts = async () => {
    try {
      const response = await customFetch.get("/posts");
      setPosts(response.data.posts);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ posts }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
}

export default App;
