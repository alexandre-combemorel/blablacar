import axios, {AxiosRequestHeaders, CancelToken} from "axios";

type optionsType = {
    data?: unknown
    params?: any
    headers?: AxiosRequestHeaders
    signal?: AbortSignal
    cancelToken?: CancelToken
}

abstract class BaseApiRessource {

    apiDomain = 'https://public-api.blablacar.com';
    isApiV2 = false

    abstract getRessourceName(): string

    public buildUrl(operation: string) {
        let collectionPath = [this.getBasePath(), this.getRessourceName()];
        if (operation) {
            collectionPath.push(operation);
        }
        return collectionPath.join('/');
    }

    public requestCollectionOperation<T>(operation: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', options: optionsType) {
        // Key for api, but can be overwritten
        if (!options?.params?.key) {
            if (!options.params) options.params = {}
            options.params = { key: process.env.REACT_APP_API_KEY, ...options.params }
        }

        return axios.request<T>({
            method: method,
            baseURL: this.getDomain(),
            url: this.buildUrl(operation),
            ...options,
            params: options.params
        })
    }

    public get<T>(path?: string, options?: optionsType) {
        return this.requestCollectionOperation<T>(path ?? '', 'GET', options ?? {})
    }

    // post, put, delete, patch

    protected getDomain() {
        return this.apiDomain
    }

    protected getBasePath() {
        return this.isApiV2 ? '/api/v2' : '/api/v3'
    }
}

export default BaseApiRessource;
