import OverView from "./component/OverView";
import HowUse from "./component/HowUse";
import Services from "./component/Services";
import CarouselClient from "./component/CarouselClient";
import WhatsappButton from "../../componants/button/WhatsappButton";
import UpButton from "../../componants/button/UpButton";
import Projects from "./component/Projects";

const Home = () => {
  return (
    <div>
      <OverView />
      <HowUse />
      <Services />
      <Projects />
      <CarouselClient />

      <WhatsappButton />
      <UpButton />
    </div>
  );
};

export default Home;
