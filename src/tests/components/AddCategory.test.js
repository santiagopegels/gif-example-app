import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('AddCategory component test', () => {

    const setCategories = () => {}
    const wrapper =  shallow(<AddCategory setCategories={setCategories} />)

    test('should show it correctly', () => {

        expect( wrapper ).toMatchSnapshot()        
    
    })
    
    test('should change the textbox', () => {
        const input = wrapper.find('input')
        const value = 'Hola mundo'

        input.simulate('change', {
            target:
            {
                value
            }
        });


    })
    

})
