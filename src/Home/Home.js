import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Sidebar/>
                            </div>
                        <div className="col-9">
                            <Content/>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}
