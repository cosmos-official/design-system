import React, { JSX } from 'react';
import { typo, TypoKey } from './typo';

type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'strong'
  | 'em'
  | 'small';

interface TextProps {
  as?: keyof Pick<JSX.IntrinsicElements, TextElement>;
  children: React.ReactNode;
  t?: TypoKey;
  className?: string;
  style?: React.CSSProperties;
}

export default function Text({
  children,
  as = 'span',
  t = 'b1',
  style = {},
  ...props
}: TextProps) {
  const Component = as;
  return (
    <Component
      style={{
        ...typo[t],
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
