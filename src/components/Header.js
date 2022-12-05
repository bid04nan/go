import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
const Header = ()=> {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
return (
  <Nav>
    <LogoLink>
      Go-koraput
    </LogoLink>
    <NavItems>
      <NavUList>
      <NavList><MyNavLink index  activeClassName="activeclasslink">Home</MyNavLink></NavList>
      <NavList><MyNavLink to="/AllPackages" activeClassName="activeclasslink">Packages</MyNavLink></NavList>
      <NavList><MyNavLink to="/AllDestinations" activeClassName="activeclasslink">Destinations</MyNavLink></NavList>
      <NavList><MyNavLink to="/Gallary" activeClassName="activeclasslink">Gallary</MyNavLink></NavList>
      <NavList><MyNavLink to="/AllTestimonials" activeClassName="activeclasslink">Testimonials</MyNavLink></NavList>
      <NavList><MyNavLink to="/Contact" activeClassName="activeclasslink">Contact Us</MyNavLink></NavList> 
      </NavUList> 
    </NavItems>
    <SideNavItems >
      <SideNavUList style={{ right: active ? "0px" : "-300px" }}>
      <SideNavList><MyNavLink index >Home</MyNavLink></SideNavList>
      <SideNavList><MyNavLink to="/AllPackages" >Packages</MyNavLink></SideNavList>
      <SideNavList><MyNavLink to="/AllDestinations" >Destinations</MyNavLink></SideNavList>
      <SideNavList><MyNavLink to="/Gallary" >Gallary</MyNavLink></SideNavList>
      <SideNavList><MyNavLink to="/AllTestimonials">Testimonials</MyNavLink></SideNavList>
      <SideNavList><MyNavLink to="/Contact" >Contact Us</MyNavLink></SideNavList> 
      </SideNavUList> 
    </SideNavItems>
    <SideNavIcon>
    <SidenavBarIcon onClick={handleClick}
        style={{ display: !active ? "block" : "none" }}>
      <FaBars />
      </SidenavBarIcon>
      <SidenavCloseIcon onClick={handleClick}
        style={{ display: active ? "block" : "none" }}>
      <MdClose />
    </SidenavCloseIcon>
    </SideNavIcon>
  </Nav>
)}
export default Header
const Nav = styled.nav`
display:flex;
align-items: center;
justify-content: space-between;
background:#1b2430;
box-shadow: 0 5px 15px rgba(0,0,0,0.06);
position: fixed;
top: 5px;
padding: 12px 12px;
width: 99%;
border-radius: 8px;
z-index: 5;


`
const LogoLink = styled.a`

`
const NavItems = styled.div`
display:block;
@media screen and (max-width:769px){
  display:none;
  }`
const SideNavItems = styled.div`
display:none;
@media screen and (max-width:769px){
  display:block;
  }
`
const NavUList = styled.ul`
display:flex;
align-items: center;
justify-content: center;
margin-top: 0;
margin-bottom: 0rem;
`
const NavList = styled.li`
list-style: none;
padding: 0 20px;
position: relative;


`
const SideNavUList = styled.ul`
  display:flex;
  flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
position: fixed;
top:70px;
right:0px;
width:300px;
height: 100vh;
background:#2a3239;
box-shadow:0 40px 60px rgba(0,0,0,0.1);
padding:40px 0 0 10px;
z-index:1;
transition: 0.3s eaise-in-out;
`
const SideNavList = styled.li`
margin-bottom:25px;
list-style: none;
padding: 0 20px;
position: relative;

`


const MyNavLink = styled(Link)`
text-decoration: none;
font-size : 1.3rem;
font-weight:600;
color: #fff;
transition : 0.3s ease-in-out;
&:hover{
  color:#17cf97; 
&::after{
  content:"";
  width:30%;
  height:2px;
   background:#17cf97;
   position: absolute;
   bottom: -4px;
   left:20px;
}
}
.activeclasslink{
  color:#17cf97;
  content:"";
  width:30%;
  height:2px;
   background:#17cf97;
   position: absolute;
   bottom: -4px;
   left:20px;
}
}
`
const SidenavBarIcon = styled.div`
text-decoration: none;
font-size : 1.3rem;
font-weight:600;
color: #fff;
`
const SidenavCloseIcon = styled.div`
text-decoration: none;
font-size : 1.3rem;
font-weight:600;
color: #fff;
`
const SideNavIcon = styled.div`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
  display: block;
  font-size: 24px;
  cursor-pointer;
}
`