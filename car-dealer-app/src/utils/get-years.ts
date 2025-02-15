export const modelYears: string[] = Array.from(
  { length: new Date().getFullYear() - 2014 },
  (_, i) => (2015 + i).toString(),
);
