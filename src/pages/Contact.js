import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { GlobalStyle } from '../components/styles/GlobalStyles';
import { MdPerson } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { MdPhone } from "react-icons/md"
import { Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';
import Footer from '../components/Footer';

const Contact = () => {
    const script = document.createElement("script");
  script.src = "https://smtpjs.com/v3/smtp.js";
  script.async = true;  
  document.body.appendChild(script);
  const [formstate, setFormstate] = useState({});

  const changeHandler = (event) =>{
    setFormstate({...formstate, [event.target.name]:event.target.value});
  };
function ButtonMailto({label,mailto}) {
    return (
        <MailTo>
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        <Link
        to='#'
        onClick={(e) => {
            window.location.href = mailto;
            e.preventDefault();
        }}
    >
        <MailToIcon/>
    </Link>
    </MailTo>
    );
};

    return(
        <>
        <ContactContainer>
            <GlobalStyle/>
            <Header/>
            <ContactWrapper>
                <ContactFormCard>
                    <ContactForm>
                    <ContactFormBodyGroup>
                    <NameIcon/>
                    <ContactName  type="text"  value={formstate.Name || ""}
                  onChange={changeHandler}
                  name="Name"
                  required
                  placeholder="NAME"/>
                  </ContactFormBodyGroup>
                  <ContactFormBodyGroup>
                  <PhoneIcon/>
                    <ContactNumber value={formstate.Phone || ""}
                            name = "Phone"
                            onChange={changeHandler}
                    type="text" placeholder="CONTACT NO"/>
                  </ContactFormBodyGroup>
                  <ContactFormBodyGroup>
                  <EmailIcon/>
                    <ContactEmail required
                            name = "Email"
                  value={formstate.Email || ""}
                  onChange={changeHandler}
                  type="email" placeholder="EMAIL"/>
                </ContactFormBodyGroup>
                <ContactFormBodyGroup>
                <ContactButton type="button">Submit</ContactButton>
                </ContactFormBodyGroup>
                    </ContactForm>
                    <ContactDivider></ContactDivider>
                    <ContactInfo>
                    <ButtonMailto label="bid10nan@gmail.com" mailto="mailto:bid10nan@gmail.com" />
                    <ContactDailoug>
                        We'll respond within 24 hrs
                    </ContactDailoug>
                    <SocialDailogue>Follow Us On:</SocialDailogue>
                    <SocialLinks>
                    <SocialIcons url="https://twitter.com" style={{height:'40%',width:'14%'}}/>
                    <SocialIcons url="https://facebook.com" style={{height:'40%',width:'14%'}} />
                    <SocialIcons url="https://instagram.com" style={{height:'40%',width:'14%'}} />
                    <SocialIcons url="https://youtube.com" style={{height:'40%',width:'14%'}}/>
                        </SocialLinks>
                    </ContactInfo>
                </ContactFormCard>
            </ContactWrapper>
            <Footer/>
        </ContactContainer>
        </>
    )
}
 export default Contact

 const ContactContainer = styled.div`
 min-height: 100vh;
   padding: 5rem calc((100vh - 1300px) / 2);
  color: #fff;
  background:black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 `

 const ContactWrapper = styled.div`
 display: flex;
 flex-direction: column;
 row-gap: 10px;
 justify-content: center;
 height: 100vh;
justify-content: center;
align-items: center;
 `
 const ContactFormCard = styled.div`
 display: flex;
 flex-direction: row;
 column-gap: 10px;
 justify-content: space-around;
 width: 900px;
height: 350px;
border: 1px solid blanchedalmond;
background: white;
@media screen and (max-width:900px){
width: 70%;
height: 250px;
column-gap:3px;
padding:7px;

}
@media screen and (max-width:700px){
    flex-direction: column;
    width: 60%;
height: 350px;
align-items: center;
}
@media screen and (max-width:430px){
padding: 7px;
width: 57%;
}
 `
 const ContactForm = styled.div`
 display: flex;
 flex-direction: column;
 row-gap: 10px;
 justify-content: center;
 `
 const ContactInfo =styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 `
 const ContactFormBodyGroup = styled.div`
 height: 50px;
 @media screen and (max-width:900px){
    height: 25px;
 }
 `
 const ContactName =styled.input`
 width: -moz-available;
width: -webkit-fill-available;
height: 40px;
border-style: groove;
border-radius: 10px;
border: 1px solid #bdbdbd;
font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
    padding: 10px 0;
    background: none;
    font-size: 14px;
    transition: border-color .2s;
    padding-left: 40px;
&: hover{
    border: 1px solid #90a3c1;
}
&: active{
    border: 1px solid #90a3c1;
}
@media screen and (max-width:900px){
    padding-left: 35px;
    width: 200px;
    height: 28px;
}
 ` 
const ContactNumber =styled.input`
width: -moz-available;
width: -webkit-fill-available;
height: 40px;
border-style: groove;
border-radius: 10px;
border: 1px solid #bdbdbd;
padding-left: 40px;
&: hover{
    border: 1px solid #90a3c1;
}
&: active{
    border: 1px solid #90a3c1;
}
@media screen and (max-width:900px){
    padding-left: 35px;
    width: 200px;
    height: 28px;
}
`
const ContactEmail =styled.input`
width: -moz-available;
width: -webkit-fill-available;
padding-left: 40px;
height: 40px;
border-style: groove;
border-radius: 10px;
border: 1px solid #bdbdbd;
&: hover{
    border: 1px solid #90a3c1;
}
&: active{
    border: 1px solid #90a3c1;
}
@media screen and (max-width:900px){
    padding-left: 35px;
    width: 200px;
    height: 28px;
}
 `
const ContactButton = styled.button`
position: relative;
top: 35px;
width: -moz-available;
background-color: #0d6efd;
border: none;
height: 40px;
font-weight: bold;
border-radius: 10px;
width: -webkit-fill-available;
@media screen and (max-width:900px){
    height: 30px;
    width: 200px;
    top:0px;
    left:31px;
}
@media screen and (max-width:430px){
height: 30px;
width: 200px;
top: 30px;
left: 0px;}
`
const ContactDivider = styled.div`
border-left: 2px dashed gray;
height: 330px;
margin-top: 10px;
@media screen and (max-width:900px){
    height: 230px;
}
@media screen and (max-width:700px){
    height: 2px;
width: 96%;
border-top: 1px dotted red;
margin-left: 7px;
}

@media screen and (max-width:430px){
    margin-top: 52px;
`

const NameIcon = styled(MdPerson)`
background-color: gray;
position: relative;
top: 40px;
height: 40px;
width: 35px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
@media screen and (max-width:900px){
    left: 31px;
    height: 27px;
    width: 31px;
    top: -2px;
}
@media screen and (max-width:430px){
    left: 0px;
    height: 27px;
    width: 31px;
    top: 27px;
}
`
const PhoneIcon = styled(MdPhone)`
background-color: gray;
position: relative;
top: 40px;
height: 40px;
width: 35px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
@media screen and (max-width:900px){
    left: 31px;
    height: 27px;
    width: 31px;
    top: -2px;
}
@media screen and (max-width:430px){
    left: 0px;
    height: 27px;
    width: 31px;
    top: 27px;
}
`
const EmailIcon = styled(MdEmail)`
background-color: gray;
position: relative;
top: 40px;
height: 40px;
width: 35px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
@media screen and (max-width:900px){
    left: 31px;
    height: 27px;
    width: 31px;
    top: -2px;
}
@media screen and (max-width:430px){
    left: 0px;
    height: 27px;
    width: 31px;
    top: 27px;
}
`
const MailTo = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
`
const MailToIcon = styled(MdEmail)`
height: 30px;
width: 35px;
` 
const ContactDailoug = styled.div`
color:black;
`
const SocialDailogue = styled.div`
color:black;
font-weight: bolder;
margin-top: 100px;
@media screen and (max-width:700px){
margin-top: 16px;
}
`
const SocialLinks = styled.div`
display: flex;
flex-direction: row;
height: 20%;
justify-content: space-around;
@media screen and (max-width:700px){
height: 70px;
}
`

const SocialIcons = styled(SocialIcon)`
`