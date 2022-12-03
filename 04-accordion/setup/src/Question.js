import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleInfo = () => {
    if(!readMore){
      return setReadMore(true);
    }
    return setReadMore(false);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleInfo}>
          {!readMore && <AiOutlinePlus></AiOutlinePlus>}
          {readMore && <AiOutlineMinus></AiOutlineMinus>}
        </button>
      </header>
      {readMore && <p>{info}</p>}
    </article>
  );
};

export default Question;
