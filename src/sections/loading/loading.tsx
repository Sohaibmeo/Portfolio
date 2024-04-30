import "./loading.css";
import "../common.css";
import { useEffect, useState } from "react";
// import AnimatedText from "../../components/animated/text";

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
    <section
      className={`section loading-wrapper ${loaded ? "hidden" : "visible"}`}
    >
      {/* <AnimatedText /> */}
      <div className="loader" />
    </section>
  );
};

export default Loading;
