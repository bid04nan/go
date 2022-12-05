import * as React from "react"
import styled from "styled-components"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"


const Layout = ({ children }) => {
  return (
    <LayoutContainer>
    <GlobalStyle/>
    <Header/>
        <main>{children}</main>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
height:100vh;
display: flex;
justify-content: center;
`
