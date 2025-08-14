import React, { JSX } from 'react';
import { typo, TypoKey } from './typo';
import { colorMap } from '@/packages/styles';

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
  style?: React.CSSProperties;
  color?: keyof typeof colorMap;
  className?: string;
}

export default function Text({
  children,
  as = 'span',
  t = 'b1',
  style = {},
  className,
  color,
  ...props
}: TextProps) {
  const Component = as;
  const colorStyle = color ? { color: colorMap[color] } : {};
  return (
    <Component
      style={{
        ...typo[t],
        ...style,
        ...colorStyle,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
