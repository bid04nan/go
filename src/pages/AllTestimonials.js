import React, { useState } from 'react'
import styled from "styled-components";
import {useStaticQuery, graphql} from 'gatsby'
import { Rating } from 'react-simple-star-rating'
import axios from 'axios'
import { AiFillStar } from "react-icons/ai";
import { GlobalStyle } from '../components/styles/GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AllTestimonials = () => {

    const [rating, setRating] = useState(0)
    const [files, setFiles] = useState('')
    const [formstate, setFormstate] = useState({});

    const changeHandler = (event) =>{
      setFormstate({...formstate, [event.target.name]:event.target.value});
    };

    const data = useStaticQuery(graphql`
    query TestimonialsQuery {
        allTestimonialsJson {
            edges {
              node {
                alt
                id
                msg
                name
                rating
                img {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
    `)
    const onChange = e => {
        setFiles(e.target.files[0]);
        
    };
    const submitHandler = async e => {

        //saveAs(files.target.files[0], `../assets/images/testimonialImage/${files.target.files[0].name}`);
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', files);
        try{
            const res = await axios.post('http://localhost:5000/upload', formdata,{     
            headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
            const {fileName, filePath} = res.data;
            const response= await axios.post('http://localhost:5000/update', {"img": filePath,"alt": formstate.Name,"msg": formstate.Message,"name": formstate.Name,"rating": rating},{     
                headers:{
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);
                if (response.status === 200){
                    console.log("inside");
                    setFiles('');
                    setRating(0);
                    setFormstate({});
                }
        }catch(err){
            if(err.response.status === 500){
                console.log("server error");
            }else{
                console.log(err.response.data.msg);
            }
        }
        

        }
    
    const handleRating = (rating) => {
        setRating(rating);
        
    
        // other logic
      }
      // Optinal callback functions
      
  return (
    <TestimonialContainer>
        <GlobalStyle/>
        <Header/>
        <TestimonialHeading>Our Testimonials</TestimonialHeading>
        <TestimonialDetailContainer>
        <TestimonialWrapper>
        <SubmitRating>
            <RatingCard>
                <RatingInfo>Feel Free to rate US </RatingInfo>
                <RatingInput>
                <RatingFormAppFormGroup>
                                <RatingFormAppFormControlInput type="text" name = "Name" value={formstate.Name || ""}
                  onChange={changeHandler} placeholder="Name"/>
                  <RatingDiv>
                  <Rating onClick={handleRating} initialValue={rating} size= {25}/>
                  </RatingDiv>
                            </RatingFormAppFormGroup>
                            
                            <RatingFormAppFormGroupMessage>
                                <RatingFormAppFormControlTextArea name="Message" type="text" value={formstate.Message || ""} 
                                onChange={changeHandler} placeholder="Please Enter your query"></RatingFormAppFormControlTextArea>
                            </RatingFormAppFormGroupMessage>
                            <RatingFormAppFormGroupButton>
                                <RatingFormUploadFile type="file"  onChange={onChange} />
                                <RatingFormAppFormButton >Upload Image</RatingFormAppFormButton>
                            </RatingFormAppFormGroupButton>
                            <RatingFormAppFormGroupButtonSubmit>
                                <RatingFormAppFormButtonSubmit onClick={submitHandler}>Submit</RatingFormAppFormButtonSubmit>
                            </RatingFormAppFormGroupButtonSubmit>
                </RatingInput>
            </RatingCard>
        

        </SubmitRating>
        {getTestimonials(data)}
        </TestimonialWrapper>
        </TestimonialDetailContainer>
        <Footer/>
    </TestimonialContainer>
  );};
  function getTestimonials(data){
    const TestimonialArray = []
    data.allTestimonialsJson.edges.forEach((item, index) => {
        TestimonialArray.push(
<TestimonialCard key={index}>
    <ImageWrapper>
<Avatar
src={item.node.img.childImageSharp.fluid.src}
alt={item.node.alt} 
fluid={item.node.img.childImageSharp.fluid} 

/></ImageWrapper>
<TestimonialBody>
    <TestimonialName>
    {item.node.name}
    <RatingAvailable>
    {Array.from({length: `${item.node.rating}`}, (_, i) => i + 1).map((elementInArray, index) => ( 
    <AiFillStar  key={index} style={{ color: "gold"}}/>
    ) 
)}
   </RatingAvailable>
    </TestimonialName>
    <TestimonialMsg>
        <q>
    {item.node.msg}</q>
    </TestimonialMsg>
</TestimonialBody>
</TestimonialCard>
);

  })
  return TestimonialArray
}

export default AllTestimonials;


const TestimonialContainer = styled.div`
min-height: 100vh;
padding: 1rem calc((100vh - 1300px) / 2);
 color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;
 background:black;
 flex-direction:column;
`
const TestimonialHeading = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin: 70px;
color: white;
font-weight: bolder;
font-family: Brushstroke;
text-align: center;
`
const TestimonialDetailContainer = styled.div`
min-height: 100vh;
padding: 1rem calc((100vh - 1300px) / 2);
 color: #fff;
 display: flex;
 justify-content: center;
 @media (max-width: 669px){
    width  :100%;
    }
 `
const TestimonialWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
row-gap:20px;
width: 80%;
`
const TestimonialCard = styled.div`
border: 1px solid black;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
-webkit-column-gap: 10px;
column-gap: 10px;
-webkit-box-pack: space-around;
-webkit-justify-content: space-around;
-ms-flex-pack: space-around;
align-items: center;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
border-radius: 9px;
background: white;
@media (max-width: 669px){
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-row-gap: 10px;
    row-gap: 10px;
}
`

const TestimonialBody = styled.div`
display :flex;
flex-direction: column;
row-gap:10px;
color:black;
@media (max-width: 669px){
justify-content: center;
align-items: center;
}
`
const TestimonialName = styled.div`
font-size: 20px;
font-weight: bolder;
font-variant: all-small-caps;
font-family: Brushstroke;
font-feature-settings: revert-layer;
text-decoration: underline;
  text-decoration-color: currentcolor;
text-decoration-color: red;
`
const TestimonialMsg = styled.div`
font-size: 15px;
font-family: Georgia, serif;
@media (max-width: 669px){
padding: 10px;
font-size: 12 px;
}
`
const Avatar = styled.img`
position: relative;
overflow: hidden;
height: 132px;
width: 140px;
border-radius: 50%;
overflow: hidden;
`
const ImageWrapper =  styled.div`
padding: 8px;
`

const SubmitRating = styled.div``
const RatingCard = styled.div`
border: 1px solid black;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
-webkit-column-gap: 10px;
column-gap: 10px;
-webkit-box-pack: space-around;
-webkit-justify-content: space-around;
-ms-flex-pack: space-around;
align-items: center;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
border-radius: 9px;
background: white;
@media (max-width: 669px){
    -webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-row-gap: 10px;
row-gap: 10px;
    }
`
const RatingInfo = styled.div`
padding: 8px;
color: black;
`
const RatingAvailable = styled.div``
const RatingInput = styled.div`
display :flex;
flex-direction: column;
row-gap:10px;
color:black;
padding: 18px;
width: 60%;
@media (max-width: 669px){
    width  :100%;
    }
`
const RatingDiv = styled.div``
const RatingFormAppFormGroup = styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;
justify-content: space-between;
@media (max-width: 669px){
    flex-direction: column;
    row-gap: 5px;
}
`
const RatingFormAppFormControlInput = styled.input`
width  :-moz-available;
width:-webkit-available;
`
const RatingFormAppFormGroupMessage = styled.div``
const RatingFormAppFormControlTextArea = styled.textarea`
width  :100%;
`
const RatingFormUploadFile = styled.input`
position:relative;
width:100%;
height:46px;
z-index:2;
cursor:pointer;
opacity: 0;
`
const RatingFormAppFormButtonSubmit = styled.button`
width: 100%;
height: 46px;
cursor:pointer;
border-radius:4px;
border:none;
outline:none;background-color: blue;
transition: background-color 0.4s;
box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);
`
const RatingFormAppFormGroupButtonSubmit = styled.div``
const RatingFormAppFormButton = styled.button`
position:absolute;
top:0px;
left:0px;
width:100%;
height:46px;
z-index:1;
display:flex;
justify-content: center;
align-items:center;
color: #fff;
background-color: #f55e30;
cursor:pointer;
border-radius:4px;
border:none;
outline:none;
transition: background-color 0.4s;
box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);
`
const RatingFormAppFormGroupButton = styled.div`
position:relative;
margin-bottom: 1.5em;
`
