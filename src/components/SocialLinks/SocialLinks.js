import SocialLink from './SocialLink/SocialLink';

import github from './github.svg';
import linkedin from './linkedin.svg';
import classes from "./SocialLinks.module.css"

const SocialLinks = () => {
    let socialPlatforms = [
        {
            name: 'Github',
            icon: github,
            url: 'https://github.com/cgooderham94'
        },
        {
            name: 'LinkedIn',
            icon: linkedin,
            url: 'https://www.linkedin.com/in/charles-gooderham/'
        }
    ]

    return (
        <div className={classes.SocialLinks}>
            {
                socialPlatforms.map((platform, index) => {
                    return <SocialLink 
                                key={platform.name} platformName={platform.name} 
                                url={platform.url} icon={platform.icon} />
                })
            }
        </div>
    );
}

export default SocialLinks;