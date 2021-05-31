import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('AddCategory component test', () => {

    const setCategories = jest.fn();
    let wrapper;


    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('should show it correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should change the textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {
            target:
            {
                value
            }
        });
    });

    test('should not submit if the input text is empty', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean the input text', () => {
        const value = "Hola Mundo"

        wrapper.find('input').simulate('change', { target: { value } })

        wrapper.find('form').simulate('submit', { preventDefault: () => { } })

        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))


        expect(wrapper.find('input').prop('value')).toBe('')
    });



})
