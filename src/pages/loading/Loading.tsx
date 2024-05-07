// import { useLocation } from "react-router-dom";
import SvgAnimation from "../../components/animated-text/SvgAnimation";
import "./Loading.css";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  // const location = useLocation();
  const handleOnLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    window.addEventListener("load", handleOnLoad);
    return () => {
      window.removeEventListener("load", handleOnLoad);
    };
  }, []);

  // useEffect(() => {
  //   setLoaded(false);
  //   setInterval(() => {
  //     setLoaded(true);
  //   }, 500);
  // }, [location]);

  return (
    <section className={`loading-container ${loaded && "hidden"}`}>
      <SvgAnimation />
    </section>
  );
};

export default Loading;
