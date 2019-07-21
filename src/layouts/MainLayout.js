// External Packages
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Internal Packages/Components
import GlobalStyles from '../theme/GlobalStyles';
import { theme } from '../theme';

// Rebass
import { Box, Flex, Text } from 'rebass';

const FlexWrapper = styled(Flex)(() => ({
  minHeight: '100vh',
}));

const Header = styled(Box)(({ theme }) => ({
  minHeight: theme.space.xl,
}));

const Main = styled(Box)(({ theme }) => ({}));

const Footer = styled(Flex)(({ theme }) => ({
  minHeight: theme.space.lg,
}));

const MainLayout = ({ children }) => {
  const { colors, fontSizes } = theme;
  const { lightgrey } = colors;

  return (
    <>
      {/* Inject dynamic global styles */}
      <GlobalStyles theme={theme} />

      {/* Provide 'theme' object to all components */}
      <ThemeProvider theme={theme}>
        <FlexWrapper
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* Header */}
          <Header height={'sm'} bg={lightgrey} width={1}>
            <Text>Hello This is some TEXT</Text>
          </Header>

          {/* Main Content */}
          <Main py={3} px={[3, 3, '10vw']} flex="auto" bg="white">
            {children}
          </Main>

          {/* Page Footer */}
          <Footer
            width={1}
            bg={lightgrey}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={fontSizes[0]} textAlign="center">
              © {new Date().getFullYear()}, Built with{' '}
              <a href="https://www.gatsbyjs.org">Gatsby</a> using{' '}
              <a href="https://rebassjs.org/">Rebass</a> &{' '}
              <a href="https://www.styled-components.com/">styled-components</a>
            </Text>
          </Footer>
        </FlexWrapper>
      </ThemeProvider>
    </>
  );
};

MainLayout.displayName = 'MainLayout';
export default MainLayout;
