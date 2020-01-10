class SignupAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    // get token(){
    //     return this.baseAdapter.csrf_token
    // }

    get headers(){
        return this.baseAdapter.headers
    }

    async signup(params){
        const res = await fetch(`${this.baseURL}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params),
            credentials: 'include'
        })
        // this.baseAdapter.csrf_token = res.headers.get('set-cookie')
    }
}