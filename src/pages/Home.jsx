// import About from "./About";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Monitize from "./Monitize";
import { Publishers } from "./Publishers";
import Starts from "./Starts";
import Value from "./Value";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
      </div>
      <Value />
      {/* <hr />  */}
      <Monitize />
      <Publishers />
      <Starts />
      <FAQ/>
    </>
  );
};

export default Home;
