import React, { Component } from 'react'
import Product from './Product'

export default class ListProduct extends Component {
    render() {
        return (
            <div className="row text-center">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        )
    }
}
