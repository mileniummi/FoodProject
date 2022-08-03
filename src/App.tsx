import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "@/pages/Landing";
import Layout from "@/pages/Layout";
import Events from "@/pages/Events";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path={"/"} element={<Layout />}>
        <Route path={"/events"} element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;
