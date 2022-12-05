import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PackageDetail from "../components/PackageDetail"
import PackageDetails from "../pages/PackageDetails"


const UsingDSG = () => (
  <Router>
  <Layout>
    <Seo title="Using DSG" />
    
  </Layout>
  </Router>
)

export default UsingDSG
