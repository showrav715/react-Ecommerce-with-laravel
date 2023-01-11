import { useContext } from "react";
import FeatureProducts from "./components/FeatureProducts";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";



const Home = () => {
  
  const data = 'showrav';

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    
    </>
  );
};

export default Home;
