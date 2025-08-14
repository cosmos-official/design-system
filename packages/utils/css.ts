export function cmerge(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(' ');
}
