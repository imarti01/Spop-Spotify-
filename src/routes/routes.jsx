import { createBrowserRouter } from "react-router-dom";
import { ContainerAllGenres } from "../components/HomePage";
import { MainContainerLibrary } from "../components/LibraryPage";
import { ContainerLikeLibrary } from "../components/LikeLibrary/ContainerLikeLibrary";
import { SearchResultsContainer } from "../components/SearchPage";
import { NowPlaying, Home, Login, Profile, Errorpage, Artistprofile } from "../pages";
import { CreateList } from "../components/CreateList/CreateList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <ContainerAllGenres />,
      },
      {
        path: "search",
        element: <SearchResultsContainer />,
      },
      {
        path: "library",
        element: <MainContainerLibrary />,
      },
      {
        path: "likelibrary",
        element: <ContainerLikeLibrary />,
      },
      {
        path: "nowplaying",
        element: <NowPlaying />,
      },
      {
        path: "createplaylist",
        element: <CreateList />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "artprofile",
    element: <Artistprofile />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);
