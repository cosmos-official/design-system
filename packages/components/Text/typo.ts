import { letterSpacing, lineHeight, weight } from '@/packages/styles';
import { CSSProperties } from 'react';

export type TypoKey =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 't1'
  | 't2'
  | 't3'
  | 'sub1'
  | 'sub2'
  | 'sub3'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'c1'
  | 'c2';

export const typo: Record<TypoKey, CSSProperties> = {
  h0: {
    fontSize: 32,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.semibold,
  },
  h1: {
    fontSize: 24,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.semibold,
  },
  h2: {
    fontSize: 20,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.bold,
  },
  h3: {
    fontSize: 20,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.semibold,
  },
  t1: {
    fontSize: 16,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.semibold,
  },
  t2: {
    fontSize: 16,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.medium,
  },
  t3: {
    fontSize: 16,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.tight,
    fontWeight: weight.medium,
  },
  sub1: {
    fontSize: 15,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.bold,
  },
  sub2: {
    fontSize: 15,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.semibold,
  },
  sub3: {
    fontSize: 15,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.medium,
  },
  b1: {
    fontSize: 14,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.semibold,
  },
  b2: {
    fontSize: 14,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.medium,
  },
  b3: {
    fontSize: 14,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.medium,
  },
  l1: {
    fontSize: 13,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.bold,
  },
  l2: {
    fontSize: 13,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.semibold,
  },
  l3: {
    fontSize: 13,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.medium,
  },
  l4: {
    fontSize: 13,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.regular,
  },
  c1: {
    fontSize: 12,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.regular,
  },
  c2: {
    fontSize: 11,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: weight.regular,
  },
};
