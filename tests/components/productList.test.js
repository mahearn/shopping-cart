// __tests__/ProductList.js
import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../../src/components/Navbar'
import ProductList from '../../src/components/ProductList'

it('should return no result if search term is missing', () => {
    const navbar = shallow(<Navbar />)
    const input = navbar.find('input')
    const keyword = input.props().value
    const results = shallow(<ProductList />)
    const list = results.find('div.search-results-container').html
    
    expect(keyword).toBe("")
    
    expect(list).toBe(null)
})
