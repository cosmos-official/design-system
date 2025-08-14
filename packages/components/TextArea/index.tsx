import { TextareaHTMLAttributes } from 'react';
import classes from './index.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ ...props }: TextAreaProps) {
  return <textarea className={classes.designSystemTextarea} {...props} />;
}
