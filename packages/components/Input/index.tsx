import { InputHTMLAttributes } from 'react';
import classes from './index.module.css';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
}
export default function Input({ value, type, ...props }: InputProps) {
  return (
    <input
      className={classes.designSystemInput}
      type={type}
      value={value}
      {...props}
    />
  );
}
