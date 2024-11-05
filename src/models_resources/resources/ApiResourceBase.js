export default class ApiResourceBase {
    static $http

    #baseUrl = '/'
    #urlResource = null
    #urlParams = {}
    #response = {}


    // Alias static methods

    static baseUrl(url) {
        return (new this()).baseUrl(url)
    }

    static params(params) {
        return (new this()).params(params)
    }

    static get() {
        return (new this()).get()
    }

    static find(id) {
        return (new this()).find(id)
    }

    static store(data) {
        return (new this()).store(data)
    }

    static update(id, data) {
        return (new this()).update(id, data)
    }

    static destroy(id) {
        return (new this()).destroy(id)
    }

    // ----- Getter

    getHttp() {
        return ApiResourceBase.$http
    }

    getResponse() {
        return this.#response
    }

    getBaseUrl() {
        return this.#baseUrl;
    }

    getResource() {
        return this.#urlResource;
    }

    getPath() {
        return this.#path()
    }

    // ------ Setter

    baseUrl(value) {
        this.#baseUrl = value

        return this
    }

    resource(resource) {
        this.#urlResource = resource

        return this
    }

    params(params) {
        this.#urlParams = params

        return this
    }

    // ------- Simple functions

    async get(url = null) {
        return await this.query(this.#path(url))
    }

    async find(id) {
        return await this.query(`${this.#path()}/${id}`)
    }

    async store(data) {
        return await this.post(this.#path(), data)
    }

    async update(id, data) {
        return await this.patch(`${this.#path()}/${id}`, data)
    }

    async destroy(id) {
        return await this.delete(`${this.#path()}/${id}`)
    }

    async query(path) {
        path = this.#isNotEmptyParams() ? this.#addUrlParams(path) : path

        this.#response = await this.getHttp().get(path)

        return this.#response
    }

    // System methods

    async post(path, data = {}) {
        path = this.#isNotEmptyParams() ? this.#addUrlParams(path) : path

        this.#response = await this.getHttp().post(path, data)

        return this.#response
    }

    async patch(path, data = {}) {
        path = this.#isNotEmptyParams() ? this.#addUrlParams(path) : path

        this.#response = await this.getHttp().patch(path, data)

        return this.#response
    }

    async delete(path) {
        path = this.#isNotEmptyParams() ? this.#addUrlParams(path) : path

        this.#response = await this.getHttp().delete(path)

        return this.#response
    }

    #isNotEmptyParams() {
        return Object.keys(this.#urlParams).length > 0
    }

    #addUrlParams(path) {
        return path + '?' + new URLSearchParams(this.#urlParams).toString()
    }

    #path(url = null) {
        const path = this.getResource()
            ? this.getBaseUrl() + '/' + this.getResource()
            : this.getBaseUrl()

        return url === null ? path : path + url
    }
}

