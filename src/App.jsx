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
import Loading from "./components/Loading";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [
        { index: true, element: <Posts /> },
        { path: ":id", element: <Post /> },
        { path: "authors", element: <Authors /> },
        { path: "join", element: <Join /> },
      ],
    },
  ]);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await customFetch.get("/posts");
      setPosts(response.data.posts);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("component mounted");
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" min-h-screen">
      <AppContext.Provider value={{ posts }}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
