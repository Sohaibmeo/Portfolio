import "./loading.css";
import "../common.css";
import { useEffect, useState } from "react";
import AnimatedText from "../../components/animated/text";

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
      className={`loading-wrapper ${loaded && "hidden"}`}
    >
      <div className="loading-container">
      {
        loaded ? <AnimatedText /> : loaded === null ? <p>Loading...</p> : <div className="loader" />
      }
      </div>
    </section>
  );
};

export default Loading;
