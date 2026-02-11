import Blog from "../../components/Blog/Blog";
import Discover from "../../components/Discover/Discover";
import Explore from "../../components/Explore/Explore";
import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import SearchBar from "../../components/searchBar/searchBar";
import Tours from "../../components/Tours/Tours";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <Discover />
      <Tours />
      <Offer />
      <Explore />
      <Blog />
    </>
  );
};

export default Home;
