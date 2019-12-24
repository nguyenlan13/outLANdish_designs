class SignupAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get headers(){
        return this.baseAdapter.headers
    }

    async signup(params){
        const res = await fetch(`${this.baseURL}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params)
        })
        
    }

}