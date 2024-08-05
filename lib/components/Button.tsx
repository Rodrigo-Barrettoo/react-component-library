import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: ButtonProps) => {
  return <button className="bg-red-300 text-red-900" {...props} />;
};

export default Button;
