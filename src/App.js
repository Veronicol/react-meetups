import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import { pagesMapper } from "./utils/constants";

const { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } = pagesMapper;

function App() {
  function getCurrentPageComponent(page) {
    const currentPageComponent = page || pagesMapper.DEFAULT;
    return <Layout>{currentPageComponent}</Layout>;
  }

  return (
    <div data-test="app">
      <MainNavigation />
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
