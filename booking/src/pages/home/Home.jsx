import React from "react";
import "./home.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { Featured } from "./components/cities/Featured";
import { Properties } from "./components/properties/Properties";
import { HomeList } from "./components/homes/HomeList";
import { Mail } from "../../components/mailUs/Mail";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="home" />
      <Properties />
      <Featured />
      <HomeList />
      <Mail />
      <Footer />
    </div>
  );
};
