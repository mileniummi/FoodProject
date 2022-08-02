import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/all";

const Stars: React.FC<{ filled: number; total?: number }> = ({
  filled,
  total = 5,
}) => {
  const outlined = total - filled;
  return (
    <>
      {[...Array(filled)].map(() => (
        <AiFillStar color={"var(--orange)"} />
      ))}
      {[...Array(outlined)].map(() => (
        <AiOutlineStar />
      ))}
    </>
  );
};

export default Stars;
