import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva(
  "border h-12 rounded-full px-6 font-medium hidden md:inline-flex items-center",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border-lime-400",
        secondary: "border-white text-white bg-transparent",
      },
      size: {
        sm: "h-10",
      },
    },
  },
);

const Button = (
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
};

export default Button;
