import Discover from "@sections/Home/Discover";
import Features from "@sections/Home/Features";
import Food from "@sections/Home/Food";
import Hero from "@sections/Home/Hero";
import Popular from "@sections/Home/Popular";
import { homeMeta } from "@settings/metadata";
import { NextPage } from "next";

export const metadata = homeMeta;

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Food />
      <Popular />
      <Discover />
    </main>
  );
};

export default Home;
