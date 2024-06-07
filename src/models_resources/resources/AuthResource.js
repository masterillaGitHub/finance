import ApiResource from './ApiResource.js'

export default class AuthResource extends ApiResource
{
    static login(email, password) {
        return (new this()).login(email, password)
    }

    async getCsrfCookie() {
        await this.query('/sanctum/csrf-cookie')
    }

    async register(name, email, password) {
        return await this.post('register', {
            name,
            email,
            password,
            password_confirmation: password
        })
    }

    async login(email, password) {
        return await this.post('login', {
            email,
            password,
            remember:true
        })
    }

    async logout() {
        await this.post('/logout')
    }

    async getAuth() {
        return await this.query('/api/auth/user')
    }
}


