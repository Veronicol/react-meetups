import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import { pagesMapper } from "./utils/constants";

const { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } = pagesMapper;

function App() {
  const [isMainNavigationVisible, setIsMainNavigationVisible] = useState(true);
  const currentScroll = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsMainNavigationVisible(window.scrollY < currentScroll.current);
      currentScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getCurrentPageComponent(page) {
    const currentPageComponent = page || pagesMapper.DEFAULT;
    return <Layout>{currentPageComponent}</Layout>;
  }

  return (
    <div data-test="app">
      {isMainNavigationVisible && <MainNavigation />}
      <Routes>
        <Route path="/" element={getCurrentPageComponent(ALL_MEETUP_PAGE)} />
        <Route path="/favorites" element={getCurrentPageComponent(FAVORITES_PAGE)} />
        <Route path="/new" element={getCurrentPageComponent(NEW_MEETUP_PAGE)} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
