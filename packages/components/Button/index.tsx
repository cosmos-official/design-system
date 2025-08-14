import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classes from './index.module.css';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  variant?: 'primary-black' | 'primary-white';
}

function variantMapper(variant: ButtonProps['variant']) {
  switch (variant) {
    case 'primary-black':
      return classes.primaryBlack;
    case 'primary-white':
      return classes.primaryWhite;
  }
}

export default function Button({
  children,
  variant = 'primary-black',
  ...props
}: ButtonProps) {
  return (
    <button className={variantMapper(variant)} {...props}>
      {children}
    </button>
  );
}
