import { Visibility } from "../types";
import classNames from "classnames";
import { useState } from "react";
import { HomeStyles } from "../styles/HomeStyles";

export const QuestionMark = () => {
  let [hoverValue, setHoverValue] = useState(Visibility.INVISIBLE);

  return (
    <div>
      <img
        onMouseEnter={() => {
          setHoverValue(Visibility.VISIBLE);
        }}
        onMouseLeave={() => setHoverValue(Visibility.INVISIBLE)}
        alt="question"
        src={require("../images/questionmark.png")}
        className={classNames(
          `${HomeStyles.homeScreen.homeImageContainer.homeQuestionMarkImage}`
        )}
      />
      <div
        className={classNames(
          hoverValue === Visibility.VISIBLE
            ? (hoverValue = Visibility.VISIBLE)
            : (hoverValue = Visibility.INVISIBLE),
          ` hover:${hoverValue} ${HomeStyles.homeScreen.homeTextContainer.homeHintText}`
        )}
      >
        How To Play: The Roshan picked a hero! you should predict and find the
        heroes by picking on the select hero part!
      </div>
    </div>
  );
};
