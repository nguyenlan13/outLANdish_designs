class BaseAdapter{

    constructor(baseURL = 'http://localhost:3000/api/v1'){
        this.baseURL = baseURL
        this.authSetup()
        this.csrf_token = null
    }

    // get csrf_token(){
    //     document.cookie.split("=")[1]
    // }

    async authSetup(){
        const res = await fetch(`${this.baseURL}/auth`, {
            credentials: 'include'
        })
        const body = await res.json()
        this.csrf_token = body.csrf_auth_token
    }

    get headers(){
        let baseHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.csrf_token
        }
        return baseHeaders
    }
    
}
