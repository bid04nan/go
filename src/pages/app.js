import React from 'react'
import Layout from '../components/Layout'

const App = ({location}) => {
    return (
        <Layout>
            <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
        </Layout>
    )
}
export default App;