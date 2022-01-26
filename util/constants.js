export const BREAKPOINTS = {
  tablet: 600,
  laptop: 1300,
};

export const QUERIES = {
  tabletAndBigger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBigger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
