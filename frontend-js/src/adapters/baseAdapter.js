class BaseAdapter{

    constructor(baseURL = 'http://localhost:3000/api/v1'){
        this.baseURL = baseURL

    }


    
    get csrf_token(){
        document.cookie.split("=")[1]

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
