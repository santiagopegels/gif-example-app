import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Test <GifGridItem />', () => {
    test('Show the component', () => {
        const wrapper = shallow(<GifGridItem />)

        expect(wrapper).toMatchSnapshot();
    })
})
