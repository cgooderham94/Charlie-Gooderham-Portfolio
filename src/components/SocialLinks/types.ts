export enum SocialPlatformName {
  linkedin = "LinkedIn",
  github = "Github",
  twitter = "Twitter",
  instagram = "Instagram",
  facebook = "Facebook",
}

interface SocialPlatform {
  name: SocialPlatformName;
  icon: string;
  url: string;
}

export type SocialPlatforms = SocialPlatform[];
