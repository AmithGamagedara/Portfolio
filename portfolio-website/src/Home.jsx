import { Spotlight } from "./components/ui/spotlight-new";
import { GridBackgroundDemo } from "./components/ui/Gridbackground";
import { ShootingStars } from "./components/ui/shooting-stars";
import Navbar from "./components/Navbar";


const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <div className="">
         <Navbar/>
        </div>

        <div className="absolute inset-0 z-10">
          <ShootingStars />
        </div>

        <Spotlight />

        <div className="absolute inset-0 z-0">
          <GridBackgroundDemo />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
