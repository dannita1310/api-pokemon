import React from "react";
import { Route, Routes } from "react-router-dom";
import Nadvar from "../components/Nadvar";
import { PokemonPage } from "../pages/PokeCarpetas/PokemonPage";
import Searchbar from "../components/Searchbar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Nadvar />}>
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<Searchbar />} />
      </Route>
    </Routes>
  );
};
