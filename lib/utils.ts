
export function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return inputs
    .filter(Boolean)
    .map((input) => {
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return input;
    })
    .join(' ');
}
