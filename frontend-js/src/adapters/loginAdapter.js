class LoginAdapter {

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get headers(){
        return this.baseAdapter.headers
    }

    async login(params){
        const res = await fetch(`${this.baseURL}/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params),
            credentials: 'include'
        })
    }
}