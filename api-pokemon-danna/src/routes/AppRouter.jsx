import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/layout";
import { PokemonDetails } from "../pages/PokeCarpetas/PokemonDetails";
import App from "../components/SearchPage/App";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />}></Route>
        <Route path="/:id" element={<PokemonDetails />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
