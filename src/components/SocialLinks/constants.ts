import { SocialPlatformName, SocialPlatforms } from "./types";
import github from "./github.svg";
import linkedin from "./linkedin.svg";

export const socialPlatforms: SocialPlatforms = [
  {
    name: SocialPlatformName.github,
    icon: github,
    url: "https://github.com/cgooderham94",
  },
  {
    name: SocialPlatformName.linkedin,
    icon: linkedin,
    url: "https://www.linkedin.com/in/charles-gooderham/",
  },
];
