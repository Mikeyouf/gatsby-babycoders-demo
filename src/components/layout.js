import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';

import HeaderMain from './Headers/HeaderMain';
import HeaderMinor from './Headers/HeaderMinor';


const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 90%;

`

const MainSection = styled.main`
  margin: 0;
  width: 100%;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: ${props => props.theme.colors.primaryAccent};
`


class Layout extends React.Component {

  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "Baby's Coders"
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderMain shopName={siteName}>
        </HeaderMain>
      )
    } else {
      header = (
        <HeaderMinor shopName={siteName}>
        </HeaderMinor>
      )
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            {header}
            <MainSection>{children}</MainSection>
            <FooterStyled>
              <strong>Baby's Coders
           - Créé par <ExternalLink href="https://www.issydennis.com/" target="_blank" rel="noopener noreferrer">Mik@el</ExternalLink>
              </strong>
            </FooterStyled>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
