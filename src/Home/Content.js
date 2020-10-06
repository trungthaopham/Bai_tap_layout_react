import React, { Component } from 'react'
import Carousel from './Carousel'
import ListProduct from './ListProduct'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <ListProduct/>
            </div>
        )
    }
}
