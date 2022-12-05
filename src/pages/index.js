import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Carosuel from "../components/Carosuel"
import Packages from "../components/Packages"
import Testimonials from "../components/Testimonials"
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import Destinations from "../components/Destinations"
import Footer from "../components/Footer"
import Promise from "../components/Promise"


const IndexPage = () => (
  
  <Router>
    
     {/* primary={false} component={React.Fragment} */}
  <Layout>
    <Seo title="Home" />
    
      <Carosuel />
      <Packages id ="packages" heading=" Our Packages"/>
      <Destinations id="destinations" heading="Top Destinations"/>
      <Testimonials id="testimonials" heading=" Testimonials"/>
      <Promise />
      <Routes>
      <Route  path="/PackageDetails/:PackageID"  />
      <Route  path="/DestinationDetails/:DestinationName"  />
      </Routes>
      <Footer />
  </Layout>
  </Router>
  
  
)

export default IndexPage