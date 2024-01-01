"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  isActionButton?: boolean;
}

const Button = ({
  type,
  text,
  onClick,
  isActionButton,
}: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          isActionButton &&
          `bg-orange-700 rounded-full p-2 text-white`,
          `bg-orange-700 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
