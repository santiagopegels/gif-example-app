import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Test <GifGridItem />', () => {

    const title = "Test"
    const url = "https://localhost/test.html"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('Should show the component', () => {

        expect(wrapper).toMatchSnapshot();
    })


    test('Should show an paragraph element with title prop', () => {

        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('Should be the same url and alt props in image element', () => {

        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })

    test('Should have animate__fadeIn class', () => {

        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)

    })
})
