import { FunctionComponent } from "react";
import classes from "./SocialLink.module.css";
import { SocialPlatformName } from "../types";

interface SocialLinkProps {
  url: string;
  icon: string;
  platformName: SocialPlatformName;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({
  url,
  icon,
  platformName,
}) => {
  return (
    <a
      href={url}
      className={classes.SocialLink}
      target="_blank"
      rel="noreferrer"
    >
      <img src={icon} alt={platformName + " Logo"} width="48" height="48" />
      <span className={classes.TextSr}>{platformName}</span>
    </a>
  );
};

export default SocialLink;
