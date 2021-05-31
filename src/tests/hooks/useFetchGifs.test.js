import { useFetchGif } from "../../hooks/useFetchGif"
import { renderHook } from '@testing-library/react-hooks'

describe('Test on hook useFetchGifs', () => {
    test('should return the initial state', () => {

        const category = 'One Punch'
        const {result} = renderHook(() => useFetchGif(category))
        const { data, loading } = result.current

        expect( data ).toEqual([])
        expect( loading ).toBe(true)

    })

})
