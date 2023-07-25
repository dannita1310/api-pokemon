import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nadvar from "../components/Nadvar";
import { Pokemon } from "./pages";
import Searchbar from "../components/Searchbar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Nadvar />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
        <Route path="search" element={<Searchbar />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
