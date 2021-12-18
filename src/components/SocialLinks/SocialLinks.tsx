import SocialLink from './SocialLink/SocialLink';
import classes from "./SocialLinks.module.css"
import { socialPlatforms } from "./constants";

const SocialLinks = () => {
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