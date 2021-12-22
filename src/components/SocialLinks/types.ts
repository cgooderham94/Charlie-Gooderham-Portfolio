import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export enum SocialPlatformName {
  linkedin = "LinkedIn",
  github = "Github",
  twitter = "Twitter",
  instagram = "Instagram",
  facebook = "Facebook",
}

interface SocialPlatform {
  name: SocialPlatformName;
  icon: IconDefinition;
  url: string;
}

export type SocialPlatforms = SocialPlatform[];
