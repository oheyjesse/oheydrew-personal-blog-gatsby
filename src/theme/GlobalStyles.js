import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStylesSC = createGlobalStyle(({ theme }) => ({
  body: {
    fontFamily: theme.fonts.mono,
    fontSize: theme.fontSizes[2],
    background: theme.colors.lightgrey,
  },
}));

const GlobalStyles = ({ theme }) => <GlobalStylesSC theme={theme} />;

GlobalStyles.displayName = 'GlobalStyles';
export default GlobalStyles;
