import { SocialPlatformName, SocialPlatforms } from "./types";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const socialPlatforms: SocialPlatforms = [
  {
    name: SocialPlatformName.github,
    icon: faGithub,
    url: "https://github.com/cgooderham94",
  },
  {
    name: SocialPlatformName.linkedin,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/charles-gooderham/",
  },
];
