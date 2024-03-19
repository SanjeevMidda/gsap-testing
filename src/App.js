import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const GsapTo = () => {
    useGSAP(() => {
      gsap.fromTo(
        ".square",
        {
          x: -250,
          repeat: -1,
          yoyo: true,
          duration: 2,
          // rotation: 180,
          borderRadius: "0%",
        },
        {
          y: 250,
          repeat: -1,
          yoyo: true,
          duration: 2,
          rotation: 180,
          ease: "bounce.out",
          borderRadius: "50%",
        }
      );
    }, []);
  };

  GsapTo();

  return (
    <div className="App">
      <div className="square"></div>
    </div>
  );
}

export default App;
