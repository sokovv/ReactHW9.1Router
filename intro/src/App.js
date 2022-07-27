import React from "react";
import Menu from "./components/Menu";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage";
import HomePage from "./components/HomePage";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

const MENU = {
  "": {
    title: "Главная",
  },
  drift: {
    title: "Дрифт-такси",
  },
  timeattack: {
    title: "Time Attack",
  },
  forza: {
    title: "Forza Karting",
  },
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu menu ={MENU} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        <Route path='*' element={<div>Страницы не существует. <Link to="/">
               Вернуться в главное меню
              </Link></div>} />
      </Route>
    </Routes>
  );
}
