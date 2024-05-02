// import AnimatedText from "../animated-text/AnimatedText";
import SvgAnimation from "../animated-text/SvgAnimation";
import "./Loading.css";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const handleOnLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    window.addEventListener("load", handleOnLoad);
    return () => {
      window.removeEventListener("load", handleOnLoad);
    };
  }, []);
  return (
    <section className={`loading-container ${loaded && "hidden"}`}>
      <SvgAnimation />
        {/* {loaded ? (
          // <AnimatedText />
          <SvgAnimation />
        ) : loaded === null ? (
          <p>Loading...</p>
        ) : (
          <div className="loader" />
        )} */}
    </section>
  );
};

export default Loading;
