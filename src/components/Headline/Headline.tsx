import { FunctionComponent } from "react";
import { headline, headlineSpan } from "./Headline.css";

interface HeadlineProps {
  text: string[];
}

export const Headline: FunctionComponent<HeadlineProps> = ({ text }) => {
  return (
    <h1 className={headline}>
      {text.map((string, index) => (
        <span key={index} className={headlineSpan}>
          {string}
        </span>
      ))}
    </h1>
  );
};
