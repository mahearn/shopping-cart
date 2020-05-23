import React, { useContext } from 'react'

import ProductList from './ProductList'
import Context from '../store/context'

import '../scss/main.scss'

function Index() {
    const { state } = useContext(Context)

    return (
        <div>
            {state.Products ? <ProductList /> : null}
        </div>
    )
}

export default Index
