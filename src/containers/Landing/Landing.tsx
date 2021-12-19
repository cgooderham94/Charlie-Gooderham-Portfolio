import React from "react";

import Headline from "../../components/Headline/Headline";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={classes.Landing}>
      <Headline></Headline>
      <SocialLinks></SocialLinks>
    </section>
  );
};

export default Landing;
