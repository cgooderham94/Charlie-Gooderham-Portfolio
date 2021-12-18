import classes from './Headline.module.css';

const Headline = () => {
    return <h1 className={classes.Headline}>
                <span>Hi. 👋</span>
                <span>I'm Charlie. 👨🏽‍💻</span>
                <span>Front-end developer with a curiosity for UX and a passion for crafting user-focussed digital experiences.</span>
            </h1>
}

export default Headline;