import { server } from "../mocks/node"

import { loadingData } from "./fetchAPI"

import { mockTodos } from "../mocks/handlers"


beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())



describe('fetchAPI tests', () => {
    it('should loaded arr', async () => {
        const res = await loadingData()
        expect(res).toEqual(mockTodos)

    })
})