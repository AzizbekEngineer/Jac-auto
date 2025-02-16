import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Models from "./pages/models/Models";
import Blog from "./pages/blog/Blog";
import Dealer from "./pages/dealer/Dealer";
import Garant from "./pages/garant/Garant";
import Detail from "./pages/single/Detail";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="model" element={<Models />} />
          <Route path="blog" element={<Blog />} />
          <Route path="dealer" element={<Dealer />} />
          <Route path="products/:id" element={<Detail />} />
          <Route path="guarantee" element={<Garant />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
