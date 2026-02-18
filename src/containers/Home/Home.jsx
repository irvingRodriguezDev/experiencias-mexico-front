import Blog from "../../components/Blog/Blog";
import Discover from "../../components/Discover/Discover";
import Explore from "../../components/Explore/Explore";
import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import SearchBar from "../../components/searchBar/searchBar";
import Tours from "../../components/Tours/Tours";
import MainLayout from "../../components/Layout/Layout";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Discover />
      <Tours />
      <Offer />
      <Explore />
      {/* <Blog /> */}
    </MainLayout>
  );
};

export default Home;
