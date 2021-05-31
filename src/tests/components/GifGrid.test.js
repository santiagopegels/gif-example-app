import React from 'react'
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif')

describe('<GifGrid /> Test on component', () => {

    const category = "Simpson";




    test('should show it correctly', () => {

        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('should show images when are load with useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/image.jpg',
            title: 'test'
        }]

        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    })


})
