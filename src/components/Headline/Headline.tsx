import { FunctionComponent } from "react";
import classes from "./Headline.module.css";

interface HeadlineProps {
  text: string[];
}

export const Headline: FunctionComponent<HeadlineProps> = ({ text }) => {
  return (
    <h1 className={classes.Headline}>
      {text.map((string, index) => (
        <span key={index}>{string}</span>
      ))}
    </h1>
  );
};
