import {setupServer} from "msw/node";
import {DefaultRequestBody, MockedRequest, RestHandler} from "msw";

export function mockApiServer(apiHandlers: RestHandler<MockedRequest<DefaultRequestBody>>[]) {
    const server = setupServer(...apiHandlers)
    beforeAll(() => {
        server.listen({
            onUnhandledRequest: 'warn',
        })
    })
    afterEach(() => {
        server.resetHandlers()
    })
    afterAll(() => server.close())
    return server
}

export const apiUrl = 'https://public-api.blablacar.com'