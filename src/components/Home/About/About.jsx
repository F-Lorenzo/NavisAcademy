import { lazy, Suspense }  from "react";
import Loader from "../../Loader/Loader";
import "./About.scss";
//import Video from "./Video/Video";
//import Text from "./Text/Text";

const Text = lazy(() => import("./Text/Text"));
const Video = lazy(() => import("./Video/Video"));


const About = () => {

  return (
    <section className="about_container">
      <Suspense fallback={<Loader />}>
        
        <Text />

        {/*
        <Video />
        */}

      </Suspense>     
    </section>
  );
};

export default About;
