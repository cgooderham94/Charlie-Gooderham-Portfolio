import classes from "./SocialLink.module.css";

const SocialLink = (props) => {
    return (
        <a href={props.url} className={classes.SocialLink} target="_blank" rel="noopener">
            <img src={props.icon} alt={props.platformName + ' Logo'} width="48" height="48" />
            <span className={classes.TextSr}>{ props.platformName }</span>
        </a>
    );
}

export default SocialLink;