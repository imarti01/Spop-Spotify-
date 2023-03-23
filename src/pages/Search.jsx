import { NavBarMov, SideMenu } from "../components/Reusable";
import { SearchResultsContainer } from "../components/SearchPage";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Search = () => {
  const screenWidth = useScreenWidth([]);

  return (
    <>
      {screenWidth < 640 ? (
        <NavBarMov currentPage="search" />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
      <SearchResultsContainer />
    </>
  );
};
