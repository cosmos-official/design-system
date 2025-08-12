import { InputHTMLAttributes } from 'react';
import classes from './index.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}
export default function Input({ value, ...props }: InputProps) {
  return (
    <input className={classes.designSystemInput} value={value} {...props} />
  );
}
