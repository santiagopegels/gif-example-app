import { useFetchGif } from "../../hooks/useFetchGif"
import { renderHook } from '@testing-library/react-hooks'

describe('Test on hook useFetchGifs', () => {
    const category = 'One Punch'

    test('should return the initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGif(category));

        const { data, loading } = result.current
        await waitForNextUpdate();

        expect(data).toEqual([])
        expect(loading).toBe(true)

    })

    test('should return an images array and loading false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGif(category));

        await waitForNextUpdate();
        const { data, loading } = result.current

        expect(data.length).toBe(10)
        expect(loading).toBe(false)

    })


})
