import { FunctionComponent } from "react";
import classes from "./SocialLink.module.css";
import { SocialPlatformName } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { themeVars } from "../../../theme/index.css";

interface SocialLinkProps {
  url: string;
  icon: IconDefinition;
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
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        color={themeVars.colors.text.secondary}
      />
      <span className={classes.TextSr}>{platformName}</span>
    </a>
  );
};

export default SocialLink;
