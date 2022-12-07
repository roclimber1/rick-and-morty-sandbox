


import React from 'react'


import Header from './Header'
import Footer from './Footer'






export const Layout = (props) => {

    const { children } = props


    return <React.Fragment>

        <Header title={'Rick and Morty'} />

        {children}

        <Footer />


    </React.Fragment>
}
