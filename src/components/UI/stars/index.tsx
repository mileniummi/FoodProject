import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/all";

const Stars: React.FC<{ filled: number; total?: number }> = ({
  filled,
  total = 5,
}) => {
  const outlined = total - filled;
  return (
    <>
      {[...Array(filled)].map((_, index) => (
        <AiFillStar key={index} color={"var(--primary)"} />
      ))}
      {[...Array(outlined)].map((_, index) => (
        <AiOutlineStar key={index} />
      ))}
    </>
  );
};

export default Stars;
