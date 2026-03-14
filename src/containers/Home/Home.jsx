import Blog from "../../components/Blog/Blog";
import Discover from "../../components/Discover/Discover";
import Explore from "../../components/Explore/Explore";
import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import Tours from "../../components/Tours/Tours";
import MainLayout from "../../components/Layout/Layout";
import About from "../../components/About/About";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Discover />
      <Tours />
      <Offer />
      {/* <About /> */}
      <Explore />
    </MainLayout>
  );
};

export default Home;
