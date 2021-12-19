import { Headline } from "../../components/Headline/Headline";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import classes from "./Landing.module.css";
import { HeadlineText } from "./constants";

const Landing = () => {
  return (
    <section className={classes.Landing}>
      <Headline text={HeadlineText} />
      <SocialLinks></SocialLinks>
    </section>
  );
};

export default Landing;
